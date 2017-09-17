import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';
import { NgForm } from '@angular/forms';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-newsfeed-new',
  templateUrl: './newsfeed-new.component.html',
  styleUrls: ['./newsfeed-new.component.css']
})
export class NewsfeedNewComponent implements OnInit {

  post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const newpost = new Post(form.value.content, form.value.author);
    console.log(newpost);
    this.postService.addPost(newpost)
      .subscribe(data => console.log(data), error => console.error(error));
    form.resetForm();
  }

}
