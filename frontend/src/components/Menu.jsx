import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Login, User} from './Login';

export const Menu = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const response = await fetch('/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            navigate('/login');
        }
    };

    return (
        <div id="caja_menu" style={{background: '#091d33', color: 'white', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
            <div style={{ padding: '100px', textAlign: 'center'}}>
                <strong className="h3">
                    Bienvenido Usuario : {Login.username}
                </strong>
                <nav className="navbar navbar-expand-lg" style={{marginTop:20, borderRadius: '30px', transition: 'all 0.5s', background: '#d2d9d0', justifyContent: 'center'}}>
                    <div className="container-fluid">
                        <label className="navbar-brand h5" style={{color: 'black'}}>Menú Principal</label>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink to="/register" className="nav-link h5 text-center" style={{color: 'black', margin: '0 15px'}}>Registrar</NavLink>
                                <NavLink to="/search" className="nav-link h5 text-center" style={{color: 'black', margin: '0 15px'}}>Buscar</NavLink>
                                <NavLink to="/profile" className="nav-link h5 text-center" style={{color: 'black', margin: '0 15px'}}>Perfil</NavLink>
                                <NavLink to="/" className="nav-link h5 text-center" style={{color:"blue", margin: '0 15px'}} href=" " onClick={handleLogout}>Cerrar Sesión</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
