import React, { Component } from 'react';
import Header from './landing-page/Header';
import Background from './landing-page/Background';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

class App extends Component {
  render () {
    return (
      <div id="app">
        <div id="landing-page">
          <Header />
          <Background />
        </div>

        <div id="sections">
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
