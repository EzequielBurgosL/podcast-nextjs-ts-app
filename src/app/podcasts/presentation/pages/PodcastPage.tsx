import React from 'react';
import { Podcast } from '../../domain/podcast';
import { Card } from '../components/Card';

type Props = {
  data: Podcast[];
};

export const PodcastPage: React.FC<Props> = ({ data }) => {
  return (
    <div className="page-container">
      <h1 className="page-title">Podcaster</h1>
      <div className="cards">
        {data.map((podcast) => {
          return <Card
            title={podcast.title}
            author={podcast.author}
            imageUrl={podcast.imageUrl}
          />
        })}
      </div>
    </div>
  );
};
