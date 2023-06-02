export interface PodcastDTO {
  title: string;
  summary: string;
  author: string;
  imageUrl: string;
  id: string,
  addedAt: string
}

export interface BasePodcast {
  title: string;
  summary: string;
  author: string;
  imageUrl: string;
  getDate(): string;
  getId(): string;
}

export class Podcast implements BasePodcast {
  title: string;
  summary: string;
  author: string;
  imageUrl: string;
  private id: string;
  private addedAt: string;

  constructor(data: PodcastDTO) {
    this.id = data.id;
    this.title = data.title;
    this.author = data.author;
    this.imageUrl = data.imageUrl;
    this.summary = data.summary;
    this.addedAt = data.addedAt;
  }

  getDate(): string {
    return this.addedAt;
  }

  getId(): string {
    return this.id;
  }
}
