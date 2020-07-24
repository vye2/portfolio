import React, { Component } from 'react';

import './App.css';
import './css/all.min.css';
import './css/responsive.css';


import Navbar from './components/Header/Navbar.js';
import Projects from './components/Projects/Projects.js'
import ListSkills from './components/Skills/ListSkills.js';
import Contacts from './components/Contacts/Contacts.js';
import About from './components/About/About.js';
import Banner from './components/Header/Banner.js';



class App extends Component {
  
  render() {
    return (
      <div className="site">

        <header className="header_area">
          <Navbar />
        </header>

        <main className="site-main">
          <Banner />
          <About />
          <ListSkills />
          <Projects />
        </main>

        <footer className="footer-area">
          <Contacts />
        </footer>

      </div>
    );
  }
}
export default App;
