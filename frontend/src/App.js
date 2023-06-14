import logo from './logo.svg';
import './App.css';


import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from './components/Login'
import { Menu } from './components/Menu' // Asegúrate de que esta ruta sea correcta


function App() {
    const [username, setUsername] = useState(null);

    return (
        <div className="App">
               <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/menu" element={<Menu />} />
                        
                        {/* agrega aquí tus demás rutas */}
                    </Routes>
                </BrowserRouter>
        </div>
    );
}

export default App;