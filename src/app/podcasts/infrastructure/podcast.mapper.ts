import { Podcast } from '../domain/podcast';

export const PodcastMapper = {
  toDomain: (data: any) =>
    new Podcast({
      title: data.title,
      description: data.description || '',
      addedAt: data.date || '',
    }),
};
