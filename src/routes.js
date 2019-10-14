import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Game from './components/Game/Game';
// need to add one of these pages in
//import PageNotFound from './components/PageNotFound';

export default (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Game} />
      <Route path="/About" component={Game} />
      <Route path="/Rules" component={Game} />
      <Route path="/Game" component={Game} />
      <Route path="/Leaderboard" component={Game} />
      <Route path="/HowToPlay" component={Game}/>
    </Switch>
  </HashRouter>
);