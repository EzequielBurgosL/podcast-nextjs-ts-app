export class PodcastApi {
  async fetchAll() {
    return [
      {
        title: 'Podcast 1',
        description: 'From the nice city of Barcelona',
        date: new Date().toISOString(),
      },
      {
        title: 'Podcast 2',
        description: 'From the nice city of London',
        date: new Date().toISOString(),
      },
    ]
  }
}