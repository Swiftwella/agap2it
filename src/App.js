import './App.css';
import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import Show from "./pages/Show"
import Episode from "./pages/Episode"


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/"><h1>TV TRIVIA</h1></Link>
        </header>
        <Route exact path="/" component={Show} />
        <Route path="/episode/:episodeId" component={Episode} />
        <footer className="App-footer">
          Sérgio Alves
        </footer>
      </div>
    </Router>
  );
}

export default App;
