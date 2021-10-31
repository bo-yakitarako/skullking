import express, { Request } from 'express';
import next from 'next';
import { Server } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import { createRegistryFunction } from './userRegistry/registry';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PostReq<Body> = Request<any, any, Body>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GetReq<Params> = Request<any, any, any, Params>;
export type SocketIO = Server<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap
>;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './client' });
const nextApiHandler = app.getRequestHandler();
const port = dev ? 3000 : 5000;

let message = '屯田兵';

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

  // 装飾についてはここから
  // @see https://note.affi-sapo-sv.com/nodejs-console-color-output.php
  const infoHead = '\x1b[37m\x1b[44m[info]\x1b[0m';
  const httpServer = server.listen(port, () => {
    if (dev) {
      console.log(
        `\n${infoHead} \x1b[45m\x1b[37mdevサーバー準備万端だぜ！\x1b[0m`,
      );
      console.log(
        `\n${infoHead} 開発用URL(cmd+クリック): \x1b[36m\x1b[4mhttps://skullking/\x1b[0m\n`,
      );
    } else {
      console.log(`${infoHead} スカルキング始まったな`);
    }
  });

  const io = new Server(httpServer);
  const { createPlayer, rename } = createRegistryFunction(io);

  server.post('/api/createPlayer', createPlayer);
  server.post('/api/renamePlayer', rename);

  io.on('connection', (socket) => {
    if (dev) {
      console.log(`${infoHead} WebSocketサーバー接続!\x1b[0m`);
    }
    socket.send(message);
  });

  const sendMessage = () => {
    io.send(message);
  };

  server.all('*', (req, res) => nextApiHandler(req, res));
});
