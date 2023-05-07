export class Episode {
  title: string;
  duration: string;
  date: string;
  private id: string;

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.duration = data.duration;
    this.date = data.date;
  }

  getId() {
    return this.id;
  }
}
