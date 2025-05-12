import "./EpisodeDetails.css";

export default function EpisodeDetails({ selectedEpisode }) {
  if (!selectedEpisode) {
    return (
      <div>
        <h2>Episode Details</h2>
        <p>Please select an episode to view more details</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Episode {selectedEpisode.id}</h2>
      <h3>{selectedEpisode.title}</h3>
      <p>{selectedEpisode.description}</p>
      <button>Watch now</button>
    </div>
  );
}
