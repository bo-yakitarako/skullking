export class Player {
  private playerId: number;
  private name: string;

  constructor(playerId: number, name: string) {
    this.playerId = playerId;
    this.name = name;
  }

  public isPlayerId(playerId: number) {
    return this.playerId === playerId;
  }

  public rename(name: string) {
    this.name = name;
  }

  public createTitleJson() {
    const { playerId, name } = this;
    return { playerId, name };
  }
}
