import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Login, User} from './Login';
import register1 from './register.png';
import profile1 from './profile.png';
import search1 from './search.png';
import logout1 from './logout.png';

export const Menu = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        const response = await fetch('https://localhost:4000/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            navigate('/login');
        }
    };

    return (
        <div id="caja_menu" style={{background: '#091d33', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center'}}> 
            <div style={{width: '100%', textAlign: 'center', padding: '50px 0', background: '#091d33'}}>
                <strong className="h3" style={{fontWeight: 'bold'}}>
                    Bienvenido Usuario : {Login.username}
                </strong>
            </div>
            <nav className="navbar ntopavbar-expand-lg" style={{marginTop:30, borderRadius: '30px', transition: 'all 0.5s', background: '#d2d9d0', width: '80%'}}>
                <div className="container-fluid">
                    <NavLink to="/menu" className="navbar-brand h5" style={{color: 'black', fontWeight: 'bold'}}>Menú Principal</NavLink>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                        <div className="navbar-nav" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <NavLink to="/register" className="nav-link h5 text-center" style={{color: 'black', margin: '0 70px', fontWeight: 'bold'}}>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    Registrar
                                    <img src={register1} alt="Register" style={{width: '50px', height: '50px'}} />
                                </div>
                            </NavLink>
                            <NavLink to="/search" className="nav-link h5 text-center" style={{color: 'black', margin: '0 70px', fontWeight: 'bold'}}>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    Buscar
                                    <img src={search1} alt="Search" style={{width: '50px', height: '50px'}} />
                                </div>
                            </NavLink>
                            <NavLink to="/profile" className="nav-link h5 text-center" style={{color: 'black', margin: '0 70px', fontWeight: 'bold'}}>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    Perfil
                                    <img src={profile1} alt="Profile" style={{width: '50px', height: '50px'}} />
                                </div>
                            </NavLink>
                            <NavLink to="/" className="nav-link h5 text-center" style={{color:"blue", margin: '0 50px', fontWeight: 'bold'}} onClick={handleLogout}>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    Cerrar Sesión
                                    <img src={logout1} alt="Logout" style={{width: '50px', height: '50px'}} />
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
