import { BasePodcast, Podcast } from '../domain/podcast';

export const PodcastMapper = {
  toDomain: (data): BasePodcast => {
    return new Podcast({
      id: data.id || '',
      title: data.title || '',
      author: data.author || '',
      summary: data.summary || '',
      addedAt: data.date || '',
      imageUrl: data.imageUrl || ''
    });
  }
};
