export class Player {
  public name: string;
  public imagePath: string;
  public description: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;

  }
}
