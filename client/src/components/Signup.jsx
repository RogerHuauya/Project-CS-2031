import React, { useState, useEffect } from 'react'; // Añadir useEffect
import { useNavigate } from "react-router-dom";
import cuaderno from './cuaderno.png';

export const SignUp = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [boxBorderColor, setBoxBorderColor] = useState(getRandomRGBColor());
    
    const handleSignUp = async (event) => {
        event.preventDefault();

        if (username.trim() === "" || password.trim() === "") {
            alert("All fields must be filled");
            return;
        }

        if (password.length < 8) {
            alert("Password should be at least 8 characters long");
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        };

        try {
            const response = await fetch('http://localhost:4000/auth/register', requestOptions);

            if (!response.ok) {
                switch (response.status) {
                    case 400:
                        alert("Invalid user input");
                        break;
                    case 409:
                        alert("Username already taken");
                        break;
                    default:
                        throw new Error(`HTTP error! status: ${response.status}`);
                }
                return;
            }

            alert("Sign Up successful!");
            navigate("/menu");
        } catch (error) {
            console.error("An error occurred:", error);
            alert("An unexpected error occurred. Please try again.");
        }
    };


    const handleGoHome = () => {
        navigate("/");
    }

    const changeBoxBorderColor = () => {
        setBoxBorderColor(getRandomRGBColor()); // Cambiar a un nuevo color de borde aleatorio
    };

    function getRandomRGBColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    useEffect(() => {
        const interval = setInterval(changeBoxBorderColor, 1000); // Cambiar el color del borde cada 2 segundos

        return () => {
            clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
        };
    }, []);

    return (
        <div 
            className="container" 
            style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                background: '#091d33', 
                height: '100vh', 
                padding: '0 10%', 
            }}
        >
            <div 
                style={{ 
                    background: "white", 
                    padding: 40, 
                    borderRadius: 50, 
                    maxWidth: 500, 
                    width: '100%', 
                    height: '80%', 
                    boxSizing: 'border-box',
                    border: `4px solid ${boxBorderColor}`
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: 30 }}>
                    <img src={cuaderno} alt="Cuaderno" style={{ width: '30%' }} />
                </div>
                <form id="form_signup" onSubmit={handleSignUp}>
                    <h1 style={{ color: "black", textAlign: "center", marginBottom: 30, fontSize: 24 }}>SIGN UP</h1>
                    
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                        <label htmlFor="txtusu" style={{ marginRight: 10 }}>
                            <strong style={{ color: "black" }}>Username:</strong>
                        </label>
                        <input 
                            type="text" 
                            id="txtusu" 
                            style={{ flexGrow: 1 }} 
                            className="form-control" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            onFocus={changeBoxBorderColor}
                            onBlur={changeBoxBorderColor} 
                            required 
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
                        <label htmlFor="txtpas" style={{ marginRight: 10 }}>
                            <strong style={{ color: "black" }}>Password:</strong>
                        </label>
                        <input 
                            type="password"
                            id="txtpas"
                            style={{ flexGrow: 1 }} 
                            className="form-control" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={changeBoxBorderColor}
                            onBlur={changeBoxBorderColor} 
                            required 
                        />
                    </div>
                    <div style={{ textAlign: "center", marginTop: 20 }}>
                        <button
                            type="submit"
                            className="btn btn-secondary"
                            onClick={handleSignUp}
                            style={{
                                marginTop: 45,
                                width: '100%',
                                padding: 15,
                                border: 'none',
                                color: 'white',
                                fontSize: 16,
                                borderRadius: '30px',
                                transition: 'all 0.5s',
                                cursor: 'pointer',
                                outline: 'none',
                                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
                                background: '#ba1f1f',
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.boxShadow = '0px 15px 20px rgba(229, 46, 46, 0.4)';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.1)';
                            }}
                        >Sign Up</button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleGoHome}
                            style={{
                                marginTop: 20,
                                width: '100%',
                                padding: 15,
                                border: 'none',
                                color: 'white',
                                fontSize: 16,
                                borderRadius: '30px',
                                transition: 'all 0.5s',
                                cursor: 'pointer',
                                outline: 'none',
                                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
                                background: '#296fba',
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.boxShadow = '0px 15px 20px rgba(41, 111, 186, 0.4)';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.1)';
                            }}
                        >Go Home</button>
                    </div>
                </form>
            </div>
        </div>
    );
};