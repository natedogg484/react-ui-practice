import React from 'react';
import './App.css';
// react router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// components
import Wrapper from './components/Wrapper'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Container from './components/Container'
// Routes
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar></Navbar>
        <Container>
          <Jumbotron>
            <h1>Getting Started!!</h1>
            <h4>Practicing making a pretty frontend for a better ux/ui</h4>
          </Jumbotron>
          <Route path ='/' exact component={Home}></Route>
        </Container>
      </Wrapper>
    </Router>
  );
}

export default App;
