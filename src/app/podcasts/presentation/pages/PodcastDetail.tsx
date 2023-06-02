import React, { useEffect, useState } from "react";
import { fetchPodcastService } from "../../application/fetchPodcastService";
import { EpisodeDetail } from "../components/EpisodeDetail";
import { EpisodesTable } from "../components/EpisodesTable";
import { PageContainer } from "../components/PageContainer";
import { SideBar } from "../components/SideBar";

type Props = {
  title: string;
  author: string;
  imageUrl: string;
  id: string;
  summary: string;
};

export const PodcastDetail: React.FC = ({ data }: { data: Props }) => {
  const [episodes, setEpisodes] = useState([]);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  useEffect(() => {
    fetchPodcastService
      .getInstance()
      .fetchPodcastEpisodes(data.id)
      .then((response) => setEpisodes(response));
  }, []);

  const handleClick = (episode) => {
    setSelectedEpisode(episode);
  };

  return (
    <PageContainer>
      <div className="detail-page">
        <SideBar
          summary={data.summary}
          title={data.title}
          author={data.author}
          imageUrl={data.imageUrl}
          handleClick={handleClick}
        />
        <div className="detail-page-content">
          {selectedEpisode ? (
            <EpisodeDetail episode={selectedEpisode} />
          ) : (
            <EpisodesTable
              episodes={episodes}
              handleGoToEpisodeDetail={handleClick}
            />
          )}
        </div>
      </div>
    </PageContainer>
  );
};
