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
  id: string;
  post: Post;
  new = false;

  constructor(public postService: PostService,
              public router: Router,
              public route: ActivatedRoute) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];
    // Get Client
    this.postService.getPost(this.id)
      .subscribe(post => {
        this.post = new Post(
          post.content,
          post.author,
          post.postId
        );
        console.log('Post: ' + typeof(this.post));
      });
  }

  onClickEdit() {
    if (!this.new) {
      this.new = true;
    }
    this.postService.editPost(this.post);
  }

  onClickDelete() {
    this.postService.deletePost(this.post)
      .subscribe(result => {
        console.log(result);
      });
    this.router.navigate(['/main', {outlets: {middle: 'newsfeed'}}]);
  }

  onCancel(b) {
    this.new = b;
  }

}
