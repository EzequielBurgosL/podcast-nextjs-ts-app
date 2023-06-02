import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  author: string;
  imageUrl: string;
  id: string;
  summary: string;
};

export const Card = ({ title, author, imageUrl, summary, id }: Props) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={imageUrl} alt="podcast image" />
      </div>
      <div className="card-info">
        <h1 className="card-title">{title}</h1>
        <p className="card-author">{author}</p>
        <Link
          href={{
            pathname: "/podcasts/[id]",
            query: { title, author, imageUrl, summary },
          }}
          as={`/podcasts/${id}`}
        >
          podcast detail
        </Link>
      </div>
    </div>
  );
};
