import { Team } from './team.model';

export class Post {
  public content: string;
  public author: Team;

  constructor(content: string, author: Team) {
    this.content = content;
    this.author = author;

  }
}
