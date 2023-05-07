export class Podcast {
  title: string;
  summary: string;
  author: string;
  imageUrl: string;
  private addedAt: Date;

  constructor(data: any) {
    this.title = data.title;
    this.author = data.author;
    this.imageUrl = data.imageUrl;
    this.summary = data.summary;
    this.addedAt = data.addedAt;
  }

  getDate() {
    return this.addedAt;
  }
}