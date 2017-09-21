import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { NgForm } from '@angular/forms';
import { Post } from '../../../models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsfeed-new',
  templateUrl: './newsfeed-new.component.html',
  styleUrls: ['./newsfeed-new.component.css']
})
export class NewsfeedNewComponent implements OnInit {
  @Output() cancel = new EventEmitter<boolean>();

  post: Post;

  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.postService.postEdit
      .subscribe( (post: Post) => {
        this.post = post;
      });
  }

  onSubmit(form: NgForm) {
    if (this.post) {
      // EDIT
      this.post.content = form.value.content;
      this.post.author = form.value.author;
      this.postService.updatePost(this.post)
        .subscribe(result => console.log(result));
      this.post = null;
    } else {
      // CREATE
      const newpost = new Post(form.value.content, form.value.author, null);
      console.log(newpost.author);
      this.postService.addPost(newpost)
        .subscribe(data => console.log(data), error => console.error(error));
      form.resetForm();
      this.router.navigate(['/main', {outlets: {middle: 'newsfeed'}}]);
    }
    // hide form
    this.cancel.emit(false);
  }

  onClear(f: NgForm) {
    this.post = null;
    f.resetForm();
  }

  onCancel() {
    this.cancel.emit(false);
  }

}
