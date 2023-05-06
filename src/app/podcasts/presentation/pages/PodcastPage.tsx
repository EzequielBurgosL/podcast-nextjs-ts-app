import React from 'react';
import { Podcast } from '../../domain/podcast';
import { PodcastCard } from '../components/Card';

type Props = {
  data: Podcast[];
};

export const PodcastPage: React.FC<Props> = ({ data }) => {
  return (
    <div className=" mx-10 mt-12 px-10">
      <h1 className="text-3xl mb-10">Welcome to Inditex podcasts</h1>
      {data.map((podcast) => (
        <PodcastCard
          title={podcast.title}
          description={podcast.description}
          date={podcast.getDate()}
        />
      ))}
    </div>
  );
};
