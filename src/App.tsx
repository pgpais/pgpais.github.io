import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Breadcrumbs, Link} from "@material-ui/core";
import {Switch, Route, BrowserRouter as Router, Link as RouterLink} from 'react-router-dom';

const App = () => {
  return <div className="App">
          <Router>
              <header className="App-header">
                  <div className="Header-name">
                      <p> Pedro Pais </p>
                  </div>
                  <Breadcrumbs className="Header-nav">
                      <RouterLink to={"/"}>
                          Home
                      </RouterLink>
                      <RouterLink to={"/about"}>
                          About me
                      </RouterLink>
                      <RouterLink to={"/projects"}>
                          Projects
                      </RouterLink>
                  </Breadcrumbs>
              </header>

              <Switch>
                  <Route path="/about">
                      <About/>
                  </Route>
                  <Route path="/">
                      <Home/>
                  </Route>
              </Switch>
          </Router>

      <h1> This page is under development. Check back later.</h1>
  </div>;
};

const Home = () => <div>Home</div>

const About = () => <div>About</div>

export default App;
