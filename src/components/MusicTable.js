import react, { useEffect, useState } from "react";
import "../App.css";
import Table from "./Table";
import mockData from "./data.json";

function MusicTable() {
  const [mTracks, setMTracks] = useState([]);
  useEffect(() => {
    getMusicTracks();
  }, []);

  const getMusicTracks = async () => {
    const tracks = await fetch(
      "https://raw.githubusercontent.com/rishtech20/tech_challenge/master/songData.json"
    );
    const data = await tracks.json();
    if (data.length > 0) {
      setMTracks(data);
    } else {
      setMTracks(mockData);
    }
  };

  return (
    <div className="MusicTable">
      <h1>MusicTable page</h1>
      <Table data={mTracks} />
    </div>
  );
}

export default MusicTable;
