import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';

@Injectable()
export class PostService {
  post: Post[] = [];

  constructor() { }

  addPost(newpost: Post) {
    this.post.push(newpost);
  }

  getPosts() {
    return this.post;
  }

}
