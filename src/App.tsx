import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Breadcrumbs, Link} from "@material-ui/core";

const App = () => {
  return (
    <div className="App">
        <header className="App-header">
            <div className="Header-name">
                <p> Pedro Pais </p>
            </div>
            <Breadcrumbs className="Header-nav">
                <Link>
                  Home
                </Link>
                <Link>
                  About me
                </Link>
                <Link>
                  Projects
                </Link>
            </Breadcrumbs>
        </header>

        <h1> This page is under development. Check back later.</h1>
    </div>
  );
}

export default App;
