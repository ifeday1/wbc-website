import './App.css';
import Aboutthechurch from './pages/Aboutthechurch';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Ministries from './pages/Ministries';
import Ministers from './pages/ Ministers';
import Diaconates from './pages/Diaconates';
import Giving from './pages/Giving';
import Event from './pages/Event';
import WbcCareers from './pages/WbcCareers';
import WinnersFc from './pages/WinnersFc';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />

        {/* About */}
        <Route path='/about-the-church' element={<Aboutthechurch />} />
        <Route path='/ministries' element={<Ministries />} />
        <Route path='/events' element={<Event />} />
        <Route path='/ministers' element={<Ministers />} />
        <Route path='/diaconates' element={<Diaconates />} />

        {/* Contact */}
        <Route path='/contact' element={<Contact />} />

        {/* Wbc Communties */}
        <Route path='/winnersbc-career' element={<WbcCareers />} />
        <Route path='/winners-fc' element={<WinnersFc />} />

        {/* Giving */}
        <Route path='/giving' element={<Giving />} />
      </Routes>
    </div>
  );
}

export default App;
