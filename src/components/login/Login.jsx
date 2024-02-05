import { useState } from "react";
import "./login.css";

const Login = ({ state, changeState, setInvitado }) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    
    const [message, setMessage] = useState("");
    const [estiloText, setEstiloText] = useState({ color: "black" });

    const logearse = async () => {
        setEstiloText({ color: "black" });
        setMessage("Cargando...");

        const data = {
            email: user,
            password: password
        };

        console.log(user, password)

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        await fetch('https://api.mimanualdelbebe.com/api/user/login', options)
            .then(response => response.json())
            .then(response => {
                //se logra

                //cambiar variable de logeado que depende del Token
                changeState();
                setInvitado(false);

                console.log(response)
            })
            .catch(err => {
                //no se logra
                setEstiloText({ color: "red" });
                setMessage("No se ha podido establecer sesión.");
            });
    };

    return (
        <>
            <div className="login__container">
                <h1>Inicia sesión</h1>
                <p>Usuario</p>
                <input
                    type="text"
                    id="user"
                    name="user"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <p>Contraseña</p>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="button-login" onClick={logearse}>
                    Inicia sesión
                </button>
                <p style={estiloText}>{message}</p>
                <button
                    className="invitado-seguir"
                    onClick={() => {
                        changeState();
                        setInvitado(true);
                    }}
                >
                    Seguir como invitado
                </button>
            </div>
            {state && <div className="overlay__fondo"></div>}
        </>
    );
};

export default Login;
