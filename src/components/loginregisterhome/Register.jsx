import { useState } from "react";
import "../login/login.css";

const Register = ({ state, openLogin, changeState, setRegistrarse }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const [message, setMessage] = useState("");
    const [estiloText, setEstiloText] = useState({ color: "black" });

    const registrarse = async () => {

        setEstiloText({ color: "black" });
        setMessage("Cargando...");

        const data = {
            name: name,
            lastname: lastname,
            age: age,
            email: email,
            password: password,
        };

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        await fetch('https://api-dev.mimanualdelbebe.com/api/user/register', options)
            .then(response => response.json())
            .then(response => {
                console.log("Enviado: ", data);
                console.log("Recibido: ",response);
                if (response && response.id) {
                    setEstiloText({ color: "blue" });
                    setMessage("Cuenta creada.");
                } else {
                    setEstiloText({ color: "red" });
                    setMessage("No se ha podido crear la cuenta.");
                }
            })
            .catch(err => {
                setEstiloText({ color: "red" });
                setMessage("No se ha podido crear la cuenta (servidor).");
            });
    };

    return (
        <>
            <div className="login__container">
                <h1>Registro</h1>

                <p>Nombre</p>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <p>Apellido</p>
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <p>Edad</p>
                <input
                    type="text"
                    id="age"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <p>Email</p>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>Contraseña</p>
                <div style={{display: "flex", gap: "4"}}>
                    <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button style={{border: "none", background: "none", cursor: "pointer", marginLeft: ".2rem", textDecoration: "underline"}} onClick={handleTogglePasswordVisibility}>
                        {showPassword ? 'Ocultar' : 'Mostrar'}
                    </button>
                </div>
                <button className="button-login" onClick={registrarse}>
                    Registrar cuenta
                </button>
                <div>
                    <button
                    className="invitado-seguir"
                    onClick={() => {
                        changeState(false);
                        openLogin(false);
                    }}
                    >Seguir como invitado</button>
                </div>
                <p style={estiloText}>{message}</p>
                <p>Ya tengo una cuenta. <b style={{ textDecoration: "underline", cursor: "pointer" }} onClick={()=>{openLogin(true)}}>Iniciar sesión.</b> </p>
            </div>
            {state && <div className="overlay__fondo"></div>}
        </>
    );
};

export default Register;
