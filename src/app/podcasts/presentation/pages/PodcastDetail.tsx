import React, { useEffect, useState } from 'react';
import { fetchPodcastService } from '../../application/fetchPodcastService';
import { SideBar } from '../components/SideBar';

type Props = {
  title: string;
  author: string;
  imageUrl: string;
  id: string;
  summary: string;
}

export const PodcastDetail: React.FC = ({ data }: { data: Props }) => {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetchPodcastService.getInstance().fetchPodcastEpisodes(data.id)
      .then(response => setEpisodes(response));
  }, []);

  return (
    <div className="detail-page">
      <SideBar
        summary={data.summary}
        title={data.title}
        author={data.author}
        imageUrl={data.imageUrl}
      />
      {!!episodes.length && (
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Duration</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map(episode => {
              return (
                <tr key={episode.id}>
                  <td>{episode.title}</td>
                  <td>{episode.duration}</td>
                  <td>{episode.date}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
};