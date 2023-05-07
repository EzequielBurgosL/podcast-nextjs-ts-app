import React, { useState } from 'react';
import { Podcast } from '../../domain/podcast';
import { Card } from '../components/Card';

type Props = {
  data: Podcast[];
};

export const PodcastPage: React.FC<Props> = ({ data }) => {
  const [filterText, setFilterText] = useState('');

  const filteredPodcasts = data.filter(podcast =>
    `${podcast.title} ${podcast.author}`
    .toLowerCase()
    .includes(filterText.toLowerCase())
  );

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Podcaster</h1>
      <div className="filter">
        <label htmlFor="filter-input">{filteredPodcasts.length}</label>
        <input
          type="text"
          id="filter-input"
          placeholder="Filter podcasts..."
          value={filterText}
          onChange={handleFilterChange}
        />
      </div>
      <div className="cards">
        {filteredPodcasts.map((podcast) => {
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
