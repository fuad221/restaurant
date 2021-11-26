import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Home } from './Reference-import'
// import Navbar from './components/Navbar'
// import Home from './components/Pages/Home'

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
