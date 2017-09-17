import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
  posts: Post[] = [];

  constructor(private http: Http) { }

  addPost(newpost: Post) {
    console.log(newpost);
    const body = JSON.stringify(newpost);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/post', body, {headers: headers})
      .map((response: Response) => {
        const result = response.json();
        const post = new Post(
          result.obj.content,
          result.obj.author);
        this.posts.push(post);
        return post;
      })
      .catch((error: Response) => Observable.throw(error.json()));

  }

  getPosts() {
    return this.posts;
  }

}
