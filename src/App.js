import './App.css';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
