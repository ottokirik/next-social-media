const express = require('express');
const app = express();
const server = require('http').Server(app);
const next = require('next');

require('dotenv').config({
  path: './.env.local',
});

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const connectToDatabase = require('./utils-server/connect-db');

const PORT = process.env.PORT || 5000;

app.use(express.json());
connectToDatabase();

nextApp.prepare().then(() => {
  // Для работы роутинга nextjs
  app.all('*', (req, res) => handle(req, res));

  server.listen(PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`Express server running on ${PORT}`);
  });
});
