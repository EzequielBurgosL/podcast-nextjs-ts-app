import { EpisodeDTO } from '../domain/episode';
import { PodcastDTO } from '../domain/podcast';
import { PodcastApi } from '../infrastructure/podcast.api';

export class fetchPodcastService {
  static instance = null;

  static getInstance(): fetchPodcastService {
    if (!fetchPodcastService.instance) {
      fetchPodcastService.instance = new fetchPodcastService();
    }
    return fetchPodcastService.instance;
  }

  async fetchAll(): Promise<PodcastDTO[]> {
    return await PodcastApi.getInstance().fetchAll();
  }

  async fetchPodcastEpisodes(id: string): Promise<EpisodeDTO> {
    return await PodcastApi.getInstance().fetchPodcastEpisodes(id);
  }
}