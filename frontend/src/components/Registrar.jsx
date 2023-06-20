import React from 'react';
import backgroundImage from './fondo.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
import register1 from './register.png';
import profile1 from './profile.png';
import search1 from './search.png';
import logout1 from './logout.png';

export const Registrar = () => {
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        const response = await fetch('https://localhost:4000/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            navigate('/search');
        }
    };

    return (
        <div style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className="container" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.9)', minHeight: '20vh', borderRadius: '20px', padding: '50px'}}>
                <NavLink to="/menu" className="navbar-brand h5" style={{color: 'black', fontWeight: 'bold'}}>Menú Principal</NavLink>
                
                <div className="navbar-container" style={{marginTop: '20px', marginBottom: '20px'}}> 
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
                
                <h3 className="mb-4" style={{textAlign: 'center', margin: '20px auto'}}>
                  Formulario De Registro De Libros
                </h3>
                <form id="miFormulario" style={{width: '100%'}}>
                    <div className="row mb-3">
                        <div className="col-md-6 mb-3">
                            <div className="input-group">
                                <span className="input-group-text">Título:  </span>
                                <input className="form-control form-control-lg" type="text" placeholder="Escriba El Título" required />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="input-group">
                                <span className="input-group-text">Autor:  </span>
                                <input className="form-control form-control-lg" type="text" placeholder="Escriba El Autor" required />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <select className="form-select form-select-lg mb-3" required>
                                <option value="">Indique Genero</option>
                                <option value="Ficción contemporánea">Ficción contemporánea</option>
                                <option value="Suspenso y thriller psicológico">Suspenso y thriller psicológico</option>
                                <option value="Ciencia ficción y fantasía contemporánea">Ciencia ficción y fantasía contemporánea</option>
                                <option value="Novelas históricas contemporáneas">Novelas históricas contemporáneas</option>
                                <option value="Literatura juvenil contemporánea">Literatura juvenil contemporánea</option>
                                <option value="No ficción narrativa">No ficción narrativa</option>
                                <option value="Novela gráfica">Novela gráfica</option>
                                <option value="Libros de autoayuda y desarrollo personal">Libros de autoayuda y desarrollo personal</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <button className="btn btn-primary btn-lg">Guardar Datos</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
