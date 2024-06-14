import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

import Nabvar from './components/Nabvar'

import Home from './views/Home';
import Busqueda from './views/Busqueda';
import Pokemon from './views/Pokemon'
import NotPage from './views/NotPage';

import './App.css';


function App() {

  return (
    <BrowserRouter>
      <div>
        <Nabvar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Busqueda" element={<Busqueda />} />
          <Route path="/Pokemon/:name" element={<Pokemon />} />
          <Route path="*" element={<NotPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
