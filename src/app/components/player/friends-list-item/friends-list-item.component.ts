import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../../models/player.model';

@Component({
  selector: 'app-friends-list-item',
  templateUrl: './friends-list-item.component.html',
  styleUrls: ['./friends-list-item.component.css']
})
export class FriendsListItemComponent implements OnInit {

  @Input() player: Player;
  constructor() { }

  ngOnInit() {
  }

}
