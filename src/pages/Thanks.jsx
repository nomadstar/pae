import "./pages.css"

const ThanksT = () => {
    return (
        <div className='thanks__container'>
            <h1>¡Gracias por tu pago!</h1>
            <p>El link de conexión para la teleconsulta lo recibirás en tu correo</p>
            <a href="/">Volver</a>
        </div>
    )
}

const ThanksP = () => {
    return (
        <div className='thanks__container'>
            <h1>¡Gracias por tu pago!</h1>
            <p>La respuesta del doctor llegará a tu correo en menos de 2 horas</p>
            <a href="/">Volver</a>
        </div>
    )
}

export { ThanksT, ThanksP };