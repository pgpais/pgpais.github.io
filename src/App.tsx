import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Breadcrumbs, Link} from "@material-ui/core";
import {Switch, Route, BrowserRouter as Router, Link as RouterLink} from 'react-router-dom';
import Home from "./Home/Home";

const App = () => {
  return <div className="App">
          <Router>
              <header className="App-header">
                  <div className="Header-name">
                      <p> Pedro Pais </p>
                  </div>
                  <Breadcrumbs className="Header-nav">
                      <RouterLink to={"/"}>
                          <Link>Home</Link>
                      </RouterLink>
                      <RouterLink to={"/about"}>
                          About me
                      </RouterLink>
                      <RouterLink to={"/projects"}>
                          Projects
                      </RouterLink>
                      <RouterLink to={"/contact"}>
                          Contact me
                      </RouterLink>
                  </Breadcrumbs>
              </header>

              <Switch>
                  <Route path="/about">
                      <About/>
                  </Route>
                  <Route path="/contact">
                      <Contact/>
                  </Route>
                  <Route path="/">
                      <Home/>
                  </Route>
              </Switch>
          </Router>

      <h1> This page is under development. Check back later.</h1>
  </div>;
};

const About = () => <div>About</div>

const Contact = () =>
    <div>
        Email: <a href={"mailto:ppais95@gmail.com"}>ppais95@gmail.com</a>
    </div>

export default App;
