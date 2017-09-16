import { Player } from './player.model';

export class Team {
  public name: string;
  public players: [Player];
  public subs: [Player];
  public avg_mmr: number;

  constructor(name: string, players: [Player], subs: [Player], avg_mmr: number) {
    this.name = name;
    this.players = players;
    this.subs = subs;
    this.avg_mmr = avg_mmr;

  }
}
