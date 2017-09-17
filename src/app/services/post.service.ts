import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
  private posts: Post[] = [];
  private post: Post;

  constructor(private http: Http) { }

  addPost(newpost: Post) {
    const body = JSON.stringify(newpost);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://synerg.herokuapp.com/post', body, {headers: headers})
    // return this.http.post('http://localhost:3000/post', body, {headers: headers})
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
    return this.http.get('http://synerg.herokuapp.com/post')
    // return this.http.get('http://localhost:3000/post')
      .map((response: Response) => {
        const posts = response.json().obj;
        const transformedPost: Post[] = [];
        for (const post of posts) {
          transformedPost.push(new Post(
            post.content,
            post.author,
            post._id
          ));
        }
        this.posts = transformedPost;
        return transformedPost;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getPost(id: string) {
    return this.http.get('http://synerg.herokuapp.com/post/' + id)
    // return this.http.get('http://localhost:3000/post/' + id)
      .map((response: Response) => {
        const post = response.json().obj;
        const newPost: Post = new Post(
            post.content,
            post.author,
            post._id
          );
        this.post = newPost;
        return newPost;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
