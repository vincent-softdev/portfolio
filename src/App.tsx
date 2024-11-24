import React from 'react';
import './stylist/_styles.scss';
import Header from './components/Header';
import HeroHeader from './components/HeroHeader';
import Introduction from './components/Introduction';
import WorkExperience from './components/WorkExperience';
import Skills from './components/skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="home-container ">
      <Header />
      <main>
        <div className="home-body">
          <HeroHeader />
          <Introduction />
          <WorkExperience />
          <Skills />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
