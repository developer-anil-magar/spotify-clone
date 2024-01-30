'use client';

import React from 'react';

import { Song } from '@/types';
import SongItem from '@/components/SongItem';
// import useOnPlay from "@/hooks/useOnPlay";

interface PageContentProps {
  songs: Song[];
}

const PageContent: React.FC<PageContentProps> = ({ songs }) => {
  // const onPlay = useOnPlay(songs);

  if (songs.length === 0) {
    return <div className="mt-4 text-neutral-400">No songs available.</div>;
  }

  return (
    <div
      className="
        mt-4 
        grid 
        grid-cols-2 
        gap-4 
        sm:grid-cols-3 
        md:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-8
      "
    >
      {songs.map((item) => (
        <SongItem onClick={() => {}} key={item.id} data={item} />
      ))}
    </div>
  );
};

export default PageContent;