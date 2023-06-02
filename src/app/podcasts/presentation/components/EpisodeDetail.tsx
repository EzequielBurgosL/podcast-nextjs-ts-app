export const EpisodeDetail = ({ episode }) => {
  return (
    <div>
      <div>{episode?.title}</div>
      <div>{episode?.description}</div>
    </div>
  );
};
