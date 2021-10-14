import express from 'express';
import next from 'next';
import { Server } from 'socket.io';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './client' });
const nextApiHandler = app.getRequestHandler();
const port = process.env.PORT ?? 3000;

app.prepare().then(() => {
  const server = express();
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());

  server.get('/unko', (req, res) => {
    res.json({ ok: false, baka: 'しねや' });
  });

  server.all('*', (req, res) => nextApiHandler(req, res));

  const httpServer = server.listen(port, () => {
    console.log('開発用サーバー起動！\n開こう: https://skullking/');
  });

  const io = new Server(httpServer);

  io.on('connection', (socket) => {
    console.log(
      '%cWebSocketサーバー接続成功!%c',
      'font-weight: 700; text-decoration: underline;',
    );
    socket.on('disconnect', () => {
      console.log('接続切れちゃったよ...');
    });
  });
});
