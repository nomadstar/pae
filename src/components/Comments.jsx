import Comentarios from "./Comentarios"

const Comments = () => {
    return (
        <div className='comm__container' id='comments'>
            <div className='comm__content'>
                <h4>Conoce lo que aman nuestros clientes del servicio</h4>
                <p>
                    Somos muy conscientes y nos preocupamos de nuestra comunidad. Es importante recibir un servicio de calidad para una crianza positiva y feliz. Nuestros valores son la <b>confianza</b>, la <b>libertad</b> y el <b>reto</b>.
                </p>
                <a href='/begin'> Iniciar Consulta </a>
            </div>
            <Comentarios />
        </div>
    )
}

export default Comments