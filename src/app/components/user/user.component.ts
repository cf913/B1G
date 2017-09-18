import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  player_name = 'B1G \' Bear';
  constructor() { }

  ngOnInit() {
  }

}
