import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Gallery from './pages/Gallery';
import Tulips from './pages/Tulips';
import MusicPlayer from './pages/MusicPlayer';
import Letter from './pages/Letter';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/tulips" component={Tulips} />
        <Route path="/music-player" component={MusicPlayer} />
        <Route path="/letter" component={Letter} />
      </Switch>
    </Router>
  );
};

export default App;