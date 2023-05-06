import { PodcastFacade } from '../infrastructure/podcast.facade';

export const fetchPodcastService = async () => {
  return await new PodcastFacade().fetchAll();
};
