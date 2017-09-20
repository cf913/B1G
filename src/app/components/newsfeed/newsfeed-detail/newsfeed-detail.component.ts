import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models/post.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../../services/post.service';

@Component({
  selector: 'app-newsfeed-detail',
  templateUrl: './newsfeed-detail.component.html',
  styleUrls: ['./newsfeed-detail.component.css']
})
export class NewsfeedDetailComponent implements OnInit {
  post: Post;
  author: string;
  content: string;
  id: string;
  showForm = false;

  constructor(public postService: PostService,
              public router: Router,
              public route: ActivatedRoute) { }

  ngOnInit() {
    // Get Client
    this.postService.getPost(this.route.snapshot.params['id'])
      .subscribe((post: Post) => {
        this.post = post;
        // fixes a timing error
        this.author = post.author;
        this.content = post.content;
        this.id = post.userId;
      });
  }

  onClickEdit() {
    if (!this.showForm) {
      this.showForm = true;
    }
    this.postService.editPost(this.post);
  }

  onClickDelete() {
    this.postService.deletePost(this.post)
      .subscribe(result => {
        console.log(result);
        this.router.navigate(['/main', {outlets: {middle: 'newsfeed'}}]);
      });

} postIsUsers() {
    return localStorage.getItem('userId') === this.id;
  }

  onCancel(b) {
    this.showForm = b;
  }

}
