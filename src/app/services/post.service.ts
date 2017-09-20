import { EventEmitter, Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {
  private posts: Post[] = [];
  private post: Post;
  postEdit = new EventEmitter<Post>();

  constructor(private http: Http) { }

  addPost(newpost: Post) {
    const body = JSON.stringify(newpost);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.post('http://synerg.herokuapp.com/post' + token, body, {headers: headers})
    // return this.http.post('/post' + token, body, {headers: headers})
      .map((response: Response) => {
        const result = response.json();
        const post = new Post(
          result.obj.content,
          result.obj.author.username,
          result.obj._id,
          result.obj.author._id);
        this.posts.push(post);
        return post;
      })
      .catch((error: Response) => Observable.throw(error.json()));

  }

  getPosts() {
    return this.http.get('http://synerg.herokuapp.com/post')
    // return this.http.get('/post')
      .map((response: Response) => {
        const posts = response.json().obj;
        const transformedPost: Post[] = [];
        for (const post of posts) {
          transformedPost.push(new Post(
            post.content,
            post.author.username,
            post._id,
            post.author._id
          ));
        }
        this.posts = transformedPost;
        return transformedPost;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getPost(id: string) {
    return this.http.get('http://synerg.herokuapp.com/post/' + id)
    // return this.http.get('/post/' + id)
      .map((response: Response) => {
        const post = response.json().obj;
        const newPost: Post = new Post(
            post.content,
            post.author.username,
            post._id,
            post.author._id
          );
        this.post = newPost;
        return newPost;
      })
      .catch((error: Response) => Observable.throw(error.json()));
  }

  editPost(post: Post) {
    this.postEdit.emit(post);
  }

  updatePost(post: Post) {
    const body = JSON.stringify(post);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.patch('http://synerg.herokuapp.com/post/' + post.postId + token, body, {headers: headers})
    // return this.http.patch('/post/' + post.postId + token, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

  deletePost(post: Post) {
    this.posts.splice(this.posts.indexOf(post), 1);
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.delete('http://synerg.herokuapp.com/post/' + post.postId + token)
    // return this.http.delete('/post/' + post.postId + token)
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error.json()));
  }

}
