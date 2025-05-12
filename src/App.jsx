import { useState } from "react";
import { episodeList } from "./data";
import Episodes from "./components/Episodes/Episodes";
import EpisodeDetails from "./components/EpisodeDetails/EpisodeDetails";

export default function App() {
  // TODO
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <div className="parent">
          <Episodes
            episodeList={episodeList}
            setSelectedEpisode={setSelectedEpisode}
          />
          {<EpisodeDetails selectedEpisode={selectedEpisode} />}
        </div>
      </main>
    </>
  );
}
