import "./Episodes.css";

export default function Episodes({ episodeList, setSelectedEpisode }) {
  return (
    <div>
      <h2>Episodes</h2>
      <ul className="episode-list">
        {episodeList.map((episode) => (
          <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
            {episode.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
