import { PodcastApi } from '../infrastructure/podcast.api';

export class fetchPodcastService {
  static instance = null;

  static getInstance(): fetchPodcastService {
    if (!fetchPodcastService.instance) {
      fetchPodcastService.instance = new fetchPodcastService();
    }
    return fetchPodcastService.instance;
  }

  async fetchAll() {
    return await PodcastApi.getInstance().fetchAll();
  }

  async fetchPodcastEpisodes(id: string) {
    return await PodcastApi.getInstance().fetchPodcastEpisodes(id);
  }
}