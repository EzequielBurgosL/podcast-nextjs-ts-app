import React from 'react';

type Props = {
  title: string;
  author: string;
  imageUrl: string;
  summary: string;
}

export const SideBar = ({ title, author, imageUrl, summary }: Props) => {
  return (
    <div className="sidebar">
      <div className="sidebar-image">
        <img src={imageUrl} alt="podcast image" />
      </div>
      <div className="sidebar-info">
        <h1 className="sidebar-title">{title}</h1>
        <p className="sidebar-author">{author}</p>
        <p className="sidebar-summary">{summary}</p>
      </div>
    </div>
  );
};
