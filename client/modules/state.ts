import { atom } from 'recoil';

export const playerIdState = atom({
  key: 'playerIdState',
  default: 0,
});

export const nameState = atom({
  key: 'nameState',
  default: '',
});
