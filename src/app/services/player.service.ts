
import { Injectable } from '@angular/core';
import { Player } from '../components/player/player.model';

@Injectable()
export class PlayerService {

  private players: Player[] = [
    new Player(
      'B1G \' Bear',
      'Pro Player yes',
      'http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/7e/7e9ac66f6edfb5349ed3033bad94203fbbcfed02_full.jpg'
    ),
    new Player(
      'B1G \' Oudi',
      '1K and rising',
      'http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/fe/fe88d7131f00b2bbc23f4be7d025b13bc45c3c46_full.jpg'
    )
  ];

  getPlayers() {
    return this.players.slice();
  }
}
