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
      <div className="detail-page-content">
        <div className="episodes-counter">
          <h1>Episodes: {episodes.length}</h1>
        </div>
        <div className="episodes-table">
          {!!episodes.length && (
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                {episodes.map((episode, index) => {
                  const rowClass = index % 2 === 0 ? 'even-row' : 'odd-row';

                  return (
                    <tr key={episode.id} className={rowClass}>
                      <td>{episode.title}</td>
                      <td>{episode.date}</td>
                      <td>{episode.duration}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
};