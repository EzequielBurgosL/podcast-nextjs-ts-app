import React from 'react';

export const Card: React.FC<{
  title: string;
  author: string;
  imageUrl: string;
}> = ({ title, author, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt="podcast image" />
      </div>
      <div className="card-info">
        <h1 className="card-title">{title}</h1>
        <p className="card-author">{author}</p>
      </div>
    </div>
  );
};
