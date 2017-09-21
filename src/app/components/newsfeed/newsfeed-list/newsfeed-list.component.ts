import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-newsfeed-list',
  templateUrl: './newsfeed-list.component.html',
  styleUrls: ['./newsfeed-list.component.css']
})
export class NewsfeedListComponent implements OnInit {
  posts: Post[];
  showForm = false;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
        console.log('getPosts: ' + posts);
      });
  }

  onClickNew() {
    this.showForm = !this.showForm;
  }

  onCancel(b) {
    this.showForm = b;
  }

}
