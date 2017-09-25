import { Player } from './player.model';

export class Team {
  public name: string;
  public players: [Player];
  public avg_mmr: number;

  constructor(name: string, players: [Player], avg_mmr: number) {
    this.name = name;
    this.players = players;
    this.avg_mmr = avg_mmr;

  }
}
