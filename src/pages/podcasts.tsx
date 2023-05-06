import React from 'react';
import { fetchPodcastService } from '../app/podcasts/application/fetchPodcastService';
import { PodcastMapper } from '../app/podcasts/infrastructure/podcast.mapper';
import { PodcastPage } from '../app/podcasts/presentation/pages/PodcastPage';

export async function getStaticProps() {
  const data = await fetchPodcastService();
  return {
    props: {
      data,
    },
  };
}

export default function Index({ data }: any): JSX.Element {
  const domainData = data.map(PodcastMapper.toDomain);
  return <PodcastPage data={domainData} />;
}
