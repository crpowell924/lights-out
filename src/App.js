import React from 'react';
import './App.css';
import Game from './game'

function App() {
  return (
    <div className="has-background-dark">
      <Header/>
      <div className="container">
        <Game/>
        <Footer/>
      </div>
    </div>
  );
}

function Header() {
  return (
    <section className="hero has-background-link">
      <div className="hero-body has-text-centered">
        <div className="container">
          <h1 className="title is-1"><span className="has-text-light">LIGHTS</span>OUT</h1>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return(
    <footer className="footer has-background-dark has-text-centered has-text-light">
      <section className="container">
        Remake of Lights Out by <a href="http://www.carleepowell.com/">Carlee Powell</a>, as requested by Viget.
      </section>
    </footer>
  );
}

export default App;
