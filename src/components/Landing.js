import "../App.css";
import { Link } from "react-router-dom";
import MusicTable from "./MusicTable";

function Landing() {
  return (
    <div className="Landing">
      <h1>Music Library</h1>
      <Link to="/library">Music List</Link>
    </div>
  );
}

export default Landing;
