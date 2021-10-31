import { Response } from 'express';
import type { PostReq, SocketIO } from '../index';
import { Player } from './Player';

export let players: Player[] = [];

export const createRegistryFunction = (io: SocketIO) => {
  const createPlayer = (req: PostReq<{ name: string }>, res: Response) => {
    const playerId = players.length + 1;
    const addedPlayer = new Player(playerId, req.body.name);
    players = [...players, addedPlayer];
    io.emit('createPlayer', [players]);
    res.json({ ok: true, playerId });
  };

  const rename = (
    req: PostReq<{ playerId: number; name: string }>,
    res: Response,
  ) => {
    const { playerId, name } = req.body;
    const player = players.find((player) => player.isPlayerId(playerId));
    if (player === undefined) {
      res
        .status(400)
        .json({ ok: false, message: 'そのIDのプレイヤーはおらんのじゃ' });
      return;
    }
    player.rename(name);
    res.json({ ok: true, name });
  };

  return { createPlayer, rename };
};