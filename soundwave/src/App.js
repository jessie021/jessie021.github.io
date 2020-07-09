import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './component/Navigation';
import Teachers from './component/Teachers';
import MusicTheory from './component/MusicTheory';
import NoteTheory from './component/NoteTheory';
import SignUp from './component/SignUp';
import MusicGenres from "./component/MusicGenres";
import LearnMore from './component/LearnMore';
import Home from "./component/Home";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App()  {
  
  return (
    <div className="App">
      
      <Router>
      <Navigation />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Teachers" component = {Teachers}>
            <Teachers />
          </Route>
          <Route path="/MusicTheory" component = {MusicTheory}>
            <MusicTheory />
          </Route>
          <Route path="/NoteTheory" component = {NoteTheory}>
            <NoteTheory />
          </Route>
          <Route path="/SignUp" component = {SignUp}>
            <SignUp />
          </Route>
          <Route path="/LearnMore" component = {LearnMore}>
            <LearnMore />
          </Route>
          <Route path="/MusicGenres" component = {MusicGenres}>
            <MusicGenres />
          </Route>
          <Route path="/" component = {Home}>
            <Home />
          </Route>
        </Switch>
      
    </Router>
  
    </div>
  );
}



export default App;
