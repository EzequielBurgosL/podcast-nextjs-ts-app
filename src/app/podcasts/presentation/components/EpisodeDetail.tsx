import { Line } from "./Line";

export const EpisodeDetail = ({ episode }) => {
  return (
    <div className="episode-detail">
      <div className="fw-bold fs-l">{episode?.title}</div>
      <div
        className="fs-s fst-italic"
        dangerouslySetInnerHTML={{ __html: episode.description as string }}
      />
      <Line />
      <div style={{ width: "100%" }}>
        <audio controls>
          <source src={episode?.url} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};
