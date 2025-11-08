const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const COMMENTS_PATH = path.join(__dirname, 'data', 'comments.json');
const STATIC_ROOT = path.join(__dirname, 'NBDT', 'DripCampaing');

app.use(express.json());
app.use(express.static(STATIC_ROOT));

app.get('/comments', async (req, res) => {
  try {
    const comments = await readComments();
    const normalized = comments.map((comment) => ({
      ...comment,
      color: comment.color || generateColor(`${comment.firstName || ''} ${comment.lastName || ''}`.trim()),
    }));
    res.json(normalized);
  } catch (error) {
    console.error('Error reading comments:', error);
    res.status(500).json({ message: 'Error retrieving comments' });
  }
});

app.post('/comments', async (req, res) => {
  const { slideId, selectionText = '', firstName, lastName, comment, range, color } = req.body || {};

  const trimmedFirstName = (firstName || '').trim();
  const trimmedLastName = (lastName || '').trim();
  const trimmedComment = (comment || '').trim();

  if (!slideId || !trimmedFirstName || !trimmedLastName || !trimmedComment || !range) {
    return res.status(400).json({ message: 'slideId, range, firstName, lastName and comment are required.' });
  }

  if (
    !Array.isArray(range.startPath)
    || !Array.isArray(range.endPath)
    || Number.isNaN(range.startOffset)
    || Number.isNaN(range.endOffset)
  ) {
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
    res.status(201).json(newComment);
  } catch (error) {
    console.error('Error saving comment:', error);
    res.status(500).json({ message: 'Error saving comment' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(STATIC_ROOT, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
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

