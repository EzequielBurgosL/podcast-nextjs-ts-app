import React, { useState } from "react";
import { Podcast } from "../../domain/podcast";
import { Card } from "../components/Card";
import { PageContainer } from "../components/PageContainer";

type Props = {
  data: Podcast[];
};

export const PodcastPage = ({ data }: Props): JSX.Element => {
  const [filterText, setFilterText] = useState("");

  const filteredPodcasts: Podcast[] = data.filter((podcast) =>
    `${podcast.title} ${podcast.author}`
      .toLowerCase()
      .includes(filterText.toLowerCase())
  );

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(event.target.value);
  };

  return (
    <PageContainer>
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
          return (
            <Card
              key={podcast.getId()}
              title={podcast.title}
              author={podcast.author}
              imageUrl={podcast.imageUrl}
              id={podcast.getId()}
              summary={podcast.summary}
            />
          );
        })}
      </div>
    </PageContainer>
  );
};
