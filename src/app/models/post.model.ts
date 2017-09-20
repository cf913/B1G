export class Post {
  public content: string;
  public author: string;
  public postId?: string;
  public userId?: string;


  constructor(content: string, author: string, postId?: string, userId?: string) {
    this.content = content;
    this.author = author;
    this.postId = postId;
    this.userId = userId;
  }
}
