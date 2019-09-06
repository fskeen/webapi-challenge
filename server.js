const express = require('express');
const server = express();
const projectRoutes = require('./routes/projectRoutes')

server.use('/projects', projectRoutes)

server.get('/', (req, res) => {
  res.send(`<h2>Clear directions save lives!</h2>`)
});

server.use(express.json())

module.exports = server;
