import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nabvar from './components/Nabvar'

import Home from './views/Home';
import Busqueda from './views/Busqueda';
import NotPage from './views/NotPage';
import './App.css';


function App() {

  return (
    <BrowserRouter>
      <div>
        <Nabvar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/Busqueda"
            element={<Busqueda />}
          />
          <Route
            path="*"
            element={<NotPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
