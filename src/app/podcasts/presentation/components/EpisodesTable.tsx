import { Episode } from "../../domain/episode";

type Props = {
  episodes: Episode[];
  handleClick: Function;
};

export const EpisodesTable = ({
  episodes = [],
  handleClick,
}: Props): JSX.Element => {
  return (
    <>
      <div className="episodes-counter">
        <h1>Episodes: {episodes.length}</h1>
      </div>
      <div className="episodes-table">
        {!!episodes.length && (
          <table className="table">
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
                    <td onClick={() => handleClick(episode)}>
                      {episode.title}
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
