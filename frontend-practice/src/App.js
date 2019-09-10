import React from 'react';
import './App.css';
// react router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// components
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'

// Routes
import Home from './components/Home'
import Features from './components/Features'
import Extras from './components/Extras'

function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar></Navbar>
          <Jumbotron>
            <h1>Getting Started!!</h1>
            <h4>Practicing making a pretty frontend for a better ux/ui</h4>
          </Jumbotron>
          <Route path ='/' exact component={Home}></Route>
          <Route path ='/features' exact component={Features}></Route>
          <Route path ='/extras' exact component={Extras}></Route>
      </Wrapper>
    </Router>
  );
}

export default App;
