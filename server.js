const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

//change app.get to create the correct route for portfolio page
app.get('/', (req, res) => res.send('Navigate to /about or /contact or /projects'));

app.get('/about', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/about.html'))
);

app.get('/contact', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/contact.html'))
);

//Projects route isn't working
app.get('/projects', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/projects.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
