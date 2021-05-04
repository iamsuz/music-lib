import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import MusicTable from "./components/MusicTable";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/library" exact component={MusicTable} />
      </Switch>
    </Router>
  );
}

export default App;
