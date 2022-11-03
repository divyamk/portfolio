import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  useEffect(() => {
    document.title = 'Divyam Khatri';
  })

  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
