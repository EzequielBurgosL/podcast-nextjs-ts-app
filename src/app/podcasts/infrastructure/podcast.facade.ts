import { PodcastApi } from "./podcast.api";

export class PodcastFacade {
  async fetchAll() {
    return await new PodcastApi().fetchAll();
  }
}
