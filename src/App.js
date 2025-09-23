import './App.css';
import { NavBar } from './components/NavBar';
import Banner from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Project';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Experience from "./components/Experience";
import Education from './components/Education';


function App()
{
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
