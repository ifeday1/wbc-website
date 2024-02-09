import './App.css';
import Aboutthechurch from './pages/Aboutthechurch';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />

        {/* About */}
        <Route path='/about-the-church' element={<Aboutthechurch />} />
        {/* Contact */}
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
