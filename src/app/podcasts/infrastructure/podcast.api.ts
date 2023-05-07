export class PodcastApi {
  async fetchAll() {
    return await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
      .then(response => response.json())
      .then(data => {
        return data.feed.entry.map(podcast => {
          return {
            title: podcast.title.label.split('-')[0],
            author: podcast.title.label.split('-')[1],
            summary: podcast.summary.label,
            imageUrl: podcast["im:image"].slice(-1)[0].label,
            addedAt: new Date().toISOString()
          }
        });
      })
      .catch(error => {
        console.error(error)
        throw new Error(`Failed to fetch data`)
      });
  }
}