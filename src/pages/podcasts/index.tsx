import React from 'react';
import { fetchPodcastService } from 'src/app/podcasts/application/fetchPodcastService';
import { PodcastMapper } from 'src/app/podcasts/infrastructure/podcast.mapper';
import { PodcastPage } from 'src/app/podcasts/presentation/pages/PodcastPage';

export async function getStaticProps() {
  const data = await fetchPodcastService.getInstance().fetchAll();

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
