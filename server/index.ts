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

  // 装飾についてはここから
  // @see https://note.affi-sapo-sv.com/nodejs-console-color-output.php
  const infoHead = '\x1b[37m\x1b[44m[info]\x1b[0m';
  const httpServer = server.listen(port, () => {
    console.log(`\n${infoHead} \x1b[45m\x1b[37mdevサーバー起動！\x1b[0m`);
    console.log(
      `\n${infoHead} 開発用URL(cmd+クリック): \x1b[36m\x1b[4mhttps://skullking/\x1b[0m\n`,
    );
  });

  const io = new Server(httpServer);

  io.on('connection', (socket) => {
    console.log(`${infoHead} WebSocketサーバー接続成功!\x1b[0m`);
    socket.on('disconnect', () => {
      console.log('接続切れちゃったよ...');
    });
  });
});
