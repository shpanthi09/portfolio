import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Navbar /> */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
