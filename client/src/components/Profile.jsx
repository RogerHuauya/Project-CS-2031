import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import backgroundImage from './fondo.jpg';
import register1 from './register.png';
import profile1 from './profile.png';
import search1 from './search.png';
import logout1 from './logout.png';

export const Profile = () => {
    const [username, setUsername] = useState(localStorage.getItem('username') || "");
    const [books, setBooks] = useState([]);
    const [requests, setRequests] = useState([]);

    const handleLogout = () => {
        localStorage.removeItem('username'); // removes username from local storage on logout
    };

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch(`https://localhost:4000/books/${username}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            setBooks(data.books);
        };

        const fetchRequests = async () => {
            const response = await fetch(`https://localhost:4000/requests/${username}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            setRequests(data.requests);
        };

        if (username) {
            fetchBooks();
            fetchRequests();
        }
    }, [username]);

    return (
        <div style={{background: 'url(${backgroundImage})', backgroundSize: 'cover', minHeight: '100vh'}}> 
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
                
                <h1>Perfil de {username}</h1>

                <h2>Libros para dar</h2>
                <ul>
                    {books.map(book => (
                        <li key={book.id}>{book.title}</li>
                    ))}
                </ul>

                <h2>Solicitudes de libros</h2>
                <ul>
                    {requests.map(request => (
                        <li key={request.id}>Solicitud para: {request.bookTitle} por {request.requester}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};