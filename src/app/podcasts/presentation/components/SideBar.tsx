import React from "react";
import { Line } from "./Line";

type Props = {
  title: string;
  author: string;
  imageUrl: string;
  summary: string;
  handleClick: Function;
};

export const SideBar = ({
  title,
  author,
  imageUrl,
  summary,
  handleClick,
}: Props): JSX.Element => {
  return (
    <div className="sidebar" onClick={() => handleClick(null)}>
      <div className="sidebar-image">
        <img src={imageUrl} alt="podcast image" />
      </div>
      <Line />
      <div className="sidebar-info">
        <h1 className="sidebar-title fs-m fw-bold">{title}</h1>
        <p className="sidebar-author fs-s fst-italic">{author}</p>
        <Line />
        <div className="sidebar-title fs-s fw-bold">Description</div>
        <p className="sidebar-summary fs-s fst-italic">{summary}</p>
      </div>
    </div>
  );
};
