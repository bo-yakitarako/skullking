import express, { Request } from 'express';
import next from 'next';
import { Server } from 'socket.io';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PostReq<Body> = Request<any, any, Body>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GetReq<Params> = Request<any, any, any, Params>;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './client' });
const nextApiHandler = app.getRequestHandler();
const port = process.env.PORT ?? 3000;

let message = '本日は雨天なり';

app.prepare().then(() => {
  const server = express();
  server.use(express.urlencoded({ extended: true }));
  server.use(express.json());

  server.get('/api/unko', (req: GetReq<{ baka?: string }>, res) => {
    const { baka } = req.query;
    res.json({ ok: typeof baka !== 'undefined', baka });
  });

  server.post('/socket/message', (req: PostReq<{ message: string }>, res) => {
    message = req.body.message;
    sendMessage();
    res.json({ ok: true });
  });

  server.all('*', (req, res) => nextApiHandler(req, res));

  // 装飾についてはここから
  // @see https://note.affi-sapo-sv.com/nodejs-console-color-output.php
  const infoHead = '\x1b[37m\x1b[44m[info]\x1b[0m';
  const httpServer = server.listen(port, () => {
    console.log(
      `\n${infoHead} \x1b[45m\x1b[37mdevサーバー準備万端だぜ！\x1b[0m`,
    );
    console.log(
      `\n${infoHead} 開発用URL(cmd+クリック): \x1b[36m\x1b[4mhttps://skullking/\x1b[0m\n`,
    );
  });

  const io = new Server(httpServer);

  io.on('connection', (socket) => {
    console.log(`${infoHead} WebSocketサーバー接続!\x1b[0m`);
    socket.send(message);
  });

  const sendMessage = () => {
    io.send(message);
  };
});
