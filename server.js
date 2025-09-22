// Simple Node.js server for StackBlitz or local testing
const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

// Serve static files (HTML, CSS, JS, assets)
app.use(express.static(path.join(__dirname)));

// Fallback route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
