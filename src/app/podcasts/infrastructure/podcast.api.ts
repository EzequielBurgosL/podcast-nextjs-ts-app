import { EpisodeDTO } from "../domain/episode";
import { PodcastDTO } from "../domain/podcast";

export class PodcastApi {
  static instance = null;

  static getInstance(): PodcastApi {
    if (!PodcastApi.instance) {
      PodcastApi.instance = new PodcastApi();
    }
    return PodcastApi.instance;
  }

  async fetchAll(): Promise<PodcastDTO[]> {
    return await fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
      .then(response => response.json())
      .then(data => {
        return data.feed.entry.map(podcast => {
          return {
            id: podcast.id.attributes['im:id'],
            title: podcast.title.label.split('-')[0],
            author: podcast.title.label.split('-')[1],
            summary: podcast.summary.label,
            imageUrl: podcast["im:image"].slice(-1)[0].label,
            addedAt: new Date().toISOString()
          } as PodcastDTO
        });
      })
      .catch(error => {
        console.error(error)
        throw new Error(`Failed to fetch data`)
      });
  }

  async fetchPodcastEpisodes(id: string): Promise<EpisodeDTO> {
    try {
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=50`)}`);
      const data = await response.json();
      if (!data.contents) {
        throw new Error(`No results found for podcast id ${id}`);
      }

      const parsedData = JSON.parse(data.contents);

      return parsedData.results.map(podcast => {
        return {
          id: podcast.trackId,
          title: podcast.trackName,
          duration: podcast.trackTimeMillis,
          date: podcast.releaseDate,
          url: podcast.episodeUrl,
          description: podcast.description
        } as EpisodeDTO;
      });
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to fetch data for podcast id ${id}`);
    }
  }
}