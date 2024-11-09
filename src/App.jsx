import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Hero from './components/Hero';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import './App.css'; // Make sure you have the CSS file imported

const AppWrapper = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <div className="transition-wrapper">
          <Routes location={location}>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => (
  <Router>
    <AppWrapper />
  </Router>
);

export default App;
