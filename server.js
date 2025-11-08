const express = require('express');
const fs = require('fs/promises');
const path = require('path');

// CRITICAL: Log environment info for Railway debugging
console.log('='.repeat(60));
console.log('🚀 STARTING SERVER');
console.log('='.repeat(60));
console.log('Node.js version:', process.version);
console.log('Platform:', process.platform);
console.log('Working directory:', __dirname);
console.log('PORT environment variable:', process.env.PORT || 'NOT SET');
console.log('='.repeat(60));

const app = express();
const PORT = process.env.PORT || 3000;
const COMMENTS_PATH = path.join(__dirname, 'data', 'comments.json');
const STATIC_ROOT = path.join(__dirname, 'NBDT', 'DripCampaing');

// Verify critical paths exist
(async () => {
  try {
    const serverExists = await fs.access(path.join(__dirname, 'server.js')).then(() => true).catch(() => false);
    const staticExists = await fs.access(STATIC_ROOT).then(() => true).catch(() => false);
    console.log('📁 server.js exists:', serverExists);
    console.log('📁 Static root exists:', staticExists, 'at', STATIC_ROOT);
  } catch (error) {
    console.error('⚠️ Error checking paths:', error.message);
  }
})();

app.use(express.json());

// API routes must come BEFORE static files
app.get('/comments', async (req, res) => {
  console.log('[GET /comments] Request received');
  try {
    const comments = await readComments();
    const normalized = comments.map((comment) => ({
      ...comment,
      color: comment.color || generateColor(`${comment.firstName || ''} ${comment.lastName || ''}`.trim()),
    }));
    console.log(`[GET /comments] Returning ${normalized.length} comments`);
    res.json(normalized);
  } catch (error) {
    console.error('[GET /comments] Error reading comments:', error);
    res.status(500).json({ message: 'Error retrieving comments' });
  }
});

app.post('/comments', async (req, res) => {
  console.log('[POST /comments] Request received');
  const { slideId, selectionText = '', firstName, lastName, comment, range, color } = req.body || {};

  const trimmedFirstName = (firstName || '').trim();
  const trimmedLastName = (lastName || '').trim();
  const trimmedComment = (comment || '').trim();

  if (!slideId || !trimmedFirstName || !trimmedLastName || !trimmedComment || !range) {
    console.warn('[POST /comments] Missing required fields:', { slideId: !!slideId, firstName: !!trimmedFirstName, lastName: !!trimmedLastName, comment: !!trimmedComment, range: !!range });
    return res.status(400).json({ message: 'slideId, range, firstName, lastName and comment are required.' });
  }

  if (
    !Array.isArray(range.startPath)
    || !Array.isArray(range.endPath)
    || Number.isNaN(range.startOffset)
    || Number.isNaN(range.endOffset)
  ) {
    console.warn('[POST /comments] Invalid range format');
    return res.status(400).json({ message: 'Range information is invalid.' });
  }

  try {
    const comments = await readComments();
    const authorColor = color || generateColor(`${trimmedFirstName} ${trimmedLastName}`);
    const newComment = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      slideId,
      selectionText,
      firstName: trimmedFirstName,
      lastName: trimmedLastName,
      comment: trimmedComment,
      color: authorColor,
      range,
      createdAt: new Date().toISOString(),
    };

    comments.push(newComment);
    await writeComments(comments);
    console.log(`[POST /comments] Comment saved successfully: ${newComment.id}`);
    res.status(201).json(newComment);
  } catch (error) {
    console.error('[POST /comments] Error saving comment:', error);
    res.status(500).json({ message: 'Error saving comment' });
  }
});

// Static files AFTER API routes
app.use(express.static(STATIC_ROOT));

// Catch-all route for SPA (must be last)
app.get('*', (req, res) => {
  res.sendFile(path.join(STATIC_ROOT, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📁 Static files served from: ${STATIC_ROOT}`);
  console.log(`💾 Comments stored at: ${COMMENTS_PATH}`);
  console.log(`✅ API endpoints: GET/POST /comments`);
});

async function readComments() {
  try {
    const json = await fs.readFile(COMMENTS_PATH, 'utf8');
    const data = JSON.parse(json);
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.comments)) return data.comments;
    return [];
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.mkdir(path.dirname(COMMENTS_PATH), { recursive: true });
      await fs.writeFile(COMMENTS_PATH, '[]', 'utf8');
      return [];
    }
    throw error;
  }
}

async function writeComments(comments) {
  await fs.writeFile(COMMENTS_PATH, JSON.stringify(comments, null, 2), 'utf8');
}

function generateColor(name) {
  const input = (name || '').toLowerCase().trim() || 'reviewer';
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = input.charCodeAt(i) + ((hash << 5) - hash);
    hash |= 0;
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 80%, 70%)`;
}

