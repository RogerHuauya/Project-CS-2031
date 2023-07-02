import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import cuaderno from './cuaderno.png';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image5 from './image5.jpeg';

export const Login = () => {
    const navigate = useNavigate();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [boxBorderColor, setBoxBorderColor] = useState(getRandomRGBColor());

    async function login({ username, password }) {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
          throw new Error(`Login API call failed with status ${response.status}`);
        }

        return await response.json();
    }

      const handleLogin = async (event) => {
        event.preventDefault();
        if (username.trim() === "" || password.trim() === "") {
            alert("Both fields must be filled");
        } else {
            try {
                const result = await login({ username, password });
                if (result) { // Reemplaza esto con la condición que determine un inicio de sesión exitoso
                    navigate("/menu"); // Navega a la ruta del menú
                }
            } catch (error) {
                console.error(error); // Aquí puedes manejar errores de la llamada a la API
            }
        }
    };

    const handleSignUp = (event) => {
        event.preventDefault();
        navigate("/signup"); // Navega a la ruta del registro
    };

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
                justifyContent: 'space-between',
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
                    border: `4px solid ${boxBorderColor}` // Aplicar el color de borde aleatorio al cuadro blanco
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: 30 }}>
                    <img src={cuaderno} alt="Cuaderno" style={{ width: '30%' }} />
                </div>
                <form id="form_login" onSubmit={handleLogin}>
                    <h1
                        style={{
                            color: "black",
                            textAlign: "center",
                            marginBottom: 30,
                            fontSize: 24
                        }}
                    >
                        LOGIN
                    </h1>
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
                            onFocus={changeBoxBorderColor} // Cambiar el color de borde del cuadro blanco cuando se selecciona el campo
                            onBlur={changeBoxBorderColor} // Cambiar el color de borde del cuadro blanco cuando se pierde el foco del campo
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: 30 }}>
                        <label htmlFor="txtpas" style={{ marginRight: 10 }}>
                            <strong style={{ color: "black" }}>Password:</strong>
                        </label>
                        <div style={{ position: "relative", flexGrow: 1 }}>
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="txtpas"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={changeBoxBorderColor} // Cambiar el color de borde del cuadro blanco cuando se selecciona el campo
                                onBlur={changeBoxBorderColor} // Cambiar el color de borde del cuadro blanco cuando se pierde el foco del campo
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                style={{
                                    position: "absolute",
                                    right: 10,
                                    top: 0,
                                    cursor: "pointer",
                                    backgroundColor: "#296fba",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "5px",
                                    padding: "5px 10px"
                                }}
                            >
                                {passwordVisible ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <input
                            type="submit"
                            className="btn btn-primary"
                            value="Login"
                            onClick={handleLogin}
                            style={{
                                width: '100%',
                                padding: 15,
                                backgroundImage: 'linear-gradient(to right, #296fba, #1f7bed)',
                                border: 'none',
                                color: 'white',
                                fontSize: 16,
                                borderRadius: '30px',
                                transition: 'all 0.5s',
                                cursor: 'pointer',
                                outline: 'none',
                                boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)'
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #1f7bed, #296fba)';
                                e.currentTarget.style.boxShadow = '0px 15px 20px rgba(46, 229, 157, 0.4)';
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #296fba, #1f7bed)';
                                e.currentTarget.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.1)';
                            }}
                        />
                        <button
                            type="button"
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
                        >
                            Sign Up
                        </button>
                    </div>
                </form>

           </div>
            <div
                style={{
                    flex: 9,
                    borderRadius: 30,
                    height: '98%',
                    backgroundImage: `url(${image1}), url(${image2}), url(${image3}), url(${image5})`,
                    backgroundPosition: 'top left, top right, bottom left, bottom right',
                    backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat',
                    backgroundSize: '50% 50%, 50% 50%, 50% 50%, 50% 50%',
                    marginLeft: 20
                }}
            />
        </div>
    );
};