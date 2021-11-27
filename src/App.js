import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Home, About, Menu, Contact, Footer } from './Reference-import'


import './App.css';

function App() {
  return (
    <div>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="home/" element={<Home />} />
            <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} /> 
          </Routes>
        </>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
