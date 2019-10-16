import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Game from './components/Game/GameBoard';
import About from './components/About/About';
import Rules from './components/Rules/Rules';
import Leaderboard from './components/Leaderboard/Leaderboard'
import MainAppBar from './components/MainAppBar/MainAppBar'
// need to add one of these pages in
//import PageNotFound from './components/PageNotFound';

export default (
  <HashRouter>
    <MainAppBar/>
    <Switch>
      <Route exact path="/" component={About} />
      <Route path="/About" component={About} />
      <Route path="/Rules" component={Rules} />
      <Route path="/Game" component={Game} />
      <Route path="/Leaderboard" component={Leaderboard} />
    </Switch>
  </HashRouter>
);