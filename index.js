const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // якщо login.html в папці 'public'

// Простий логін API
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === '12345') {
    res.json({ token: 'mock-jwt-token' });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Старт сервера
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
