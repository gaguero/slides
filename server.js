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
    res.json(comments);
  } catch (error) {
    console.error('Error reading comments:', error);
    res.status(500).json({ message: 'Error retrieving comments' });
  }
});

app.post('/comments', async (req, res) => {
  const { slideId, selectionText, author, comment } = req.body || {};

  if (!slideId || !selectionText || !author || !comment) {
    return res.status(400).json({ message: 'slideId, selectionText, author and comment are required.' });
  }

  const newComment = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    slideId,
    selectionText: selectionText.trim(),
    author: author.trim(),
    comment: comment.trim(),
    createdAt: new Date().toISOString(),
  };

  try {
    const comments = await readComments();
    comments.push(newComment);
    await fs.writeFile(COMMENTS_PATH, JSON.stringify(comments, null, 2), 'utf8');
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
    const data = await fs.readFile(COMMENTS_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.mkdir(path.dirname(COMMENTS_PATH), { recursive: true });
      await fs.writeFile(COMMENTS_PATH, '[]', 'utf8');
      return [];
    }
    throw error;
  }
}

