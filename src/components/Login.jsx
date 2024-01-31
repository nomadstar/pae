import "./login.css"

const Login = ({state, changeState}) => {
    return (
        <>
            <form className="login__container">
                <div className="login__close">
                    <b onClick={changeState}>&times;</b>
                </div>
                <h1>Inicia sesión</h1>
                <p>Usuario</p>
                <input type="text" id="user" name="user" required />
                <p>Contraseña</p>
                <input type="password" id="password" name="password" required />
                <button className="button-login" type="submit">Inicia sesión</button>
                <button className="invitado-seguir">Seguir como invitado</button>
            </form>
            {state && <div className="overlay__fondo"></div>}
        </>
    )
}

export default Login
