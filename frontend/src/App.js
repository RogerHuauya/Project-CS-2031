import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from './components/Login'
import { Menu } from './components/Menu' // Asegúrate de que esta ruta sea correcta

function App() {
  return(
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/menu" element={<Menu/>} /> // Aquí está la nueva ruta para el Menú
        </Routes>
      </BrowserRouter>

    </div>
  );  
}

export default App;