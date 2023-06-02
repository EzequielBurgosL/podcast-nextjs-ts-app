import { Episode } from "../../domain/episode";

type Props = {
  episodes: Episode[];
  handleGoToEpisodeDetail: Function;
};

export const EpisodesTable = ({
  episodes = [],
  handleGoToEpisodeDetail,
}: Props): JSX.Element => {
  return (
    <>
      <div className="episodes-counter fs-l">
        <h1>Episodes: {episodes.length}</h1>
      </div>
      <div className="episodes-table">
        {!!episodes.length && (
          <table className="table fs-sm">
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {episodes.map((episode, index) => {
                const rowClass = index % 2 === 0 ? "even-row" : "odd-row";

                return (
                  <tr key={episode.id} className={rowClass}>
                    <td onClick={() => handleGoToEpisodeDetail(episode)}>
                      <a>{episode.title}</a>
                    </td>
                    <td>{episode.date}</td>
                    <td>{episode.duration}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};
