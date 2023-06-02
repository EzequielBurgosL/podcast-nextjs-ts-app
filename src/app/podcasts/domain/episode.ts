export interface EpisodeDTO {
  title: string;
  duration: string;
  date: string;
  id: string
}

export interface BaseEpisode {
  title: string;
  duration: string;
  date: string;
  getId(): string;
}

export class Episode implements BaseEpisode {
  title: string;
  duration: string;
  date: string;
  private id: string;

  constructor(data: EpisodeDTO) {
    this.id = data.id;
    this.title = data.title;
    this.duration = data.duration;
    this.date = data.date;
  }

  getId(): string {
    return this.id;
  }
}