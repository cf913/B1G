export class Post {
  public content: string;
  public author: string;
  public postId?: string;

  constructor(content: string, author: string, postId?: string) {
    this.content = content;
    this.author = author;
    this.postId = postId;
  }
}
