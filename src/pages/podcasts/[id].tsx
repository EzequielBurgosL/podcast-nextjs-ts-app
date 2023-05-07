import React from 'react';
import { useRouter } from 'next/router'
import { PodcastDetail } from 'src/app/podcasts/presentation/pages/PodcastDetail';

export default function Index(): JSX.Element {
  const router = useRouter();

  return <PodcastDetail data={router.query}/>;
}