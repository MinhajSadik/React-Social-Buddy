import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import PostDetail from './Components/PostDetail/PostDetail';

function App() {
  return (
    <div className="App">
      <Router>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/home">Home1</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/post/:id">
              <PostDetail/>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
