import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-newsfeed-item',
  templateUrl: './newsfeed-item.component.html',
  styleUrls: ['./newsfeed-item.component.css']
})
export class NewsfeedItemComponent implements OnInit {
  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }

}
