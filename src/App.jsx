import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Artistas from './components/Artistas';
import Ciencia from './components/Ciencia';
import Footer from './components/Footer';
import Galeria from './components/Galeria';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Artistas" element={<Artistas />} />
            <Route path="/Ciencia" element={<Ciencia />} />
            <Route path="/Galeria" element={<Galeria />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
