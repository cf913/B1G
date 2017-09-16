import { Component, OnInit } from '@angular/core';
import { Player } from '../../../models/player.model';
import { PlayerService } from '../../../services/player.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  players: Player[];
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.players = this.playerService.getPlayers();
  }

}
