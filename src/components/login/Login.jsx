import { useState } from "react";
import "./login.css";

const Login = ({ state, changeState, setInvitado, setLogeado, openRegister }) => {
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

        await fetch('https://api-dev.mimanualdelbebe.com/api/user/login', options)
            .then(response => response.json())
            .then(response => {
                if(response.msg === "Error de credenciales!"){
                    setEstiloText({ color: "red" });
                    setMessage("Error de credenciales.");
                }else if(response.token != ""){
                    const token = response.token
                    const user = response.user

                    localStorage.setItem('miToken', token)
                    localStorage.setItem('user',user)

                    changeState();
                    setInvitado(false);
                    setLogeado(true);

                    return;
                }else{
                    setEstiloText({ color: "red" });
                    setMessage("No se ha podido establecer sesión.");
                    console.log(response)
                }
            })
            .catch(err => {
                setEstiloText({ color: "red" });
                setMessage("No se ha podido establecer sesión (servidor).");
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

                <button
                    className="invitado-seguir"
                    onClick={() => {
                        changeState();
                        setInvitado(true);
                    }}
                >
                    Seguir como invitado
                </button>

                <p style={estiloText}>{message}</p>
                <a style={{cursor: "pointer", textDecoration: "underline", fontSize: "1.1rem"}} onClick={openRegister} >Crearme una cuenta</a>
            </div>
            {state && <div className="overlay__fondo"></div>}
        </>
    );
};

export default Login;
