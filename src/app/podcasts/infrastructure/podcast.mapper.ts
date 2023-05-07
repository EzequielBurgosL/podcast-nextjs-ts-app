import { Podcast } from '../domain/podcast';

export const PodcastMapper = {
  toDomain: (data: any) => {
    return new Podcast({
      title: data.title || '',
      author: data.author || '',
      summary: data.summary || '',
      addedAt: data.date || '',
      imageUrl: data.imageUrl || ''
    });
  }
};
