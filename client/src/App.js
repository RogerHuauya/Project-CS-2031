import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './components/Login';
import { SignUp } from './components/Signup';// Asegúrate de que esta ruta sea correcta
import { Menu } from './components/Menu'; // Asegúrate de que esta ruta sea correcta
import { Registrar } from './components/Registrar';
import { Listar } from './components/Listar';
import { Profile } from './components/Profile';
function App() {
    const [username, setUsername] = useState(null);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/register" element={<Registrar />} />
                    <Route path="/search" element={<Listar />} />
                    <Route path="/profile" element={<Profile />} />
                    {/* agrega aquí tus demás rutas */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;