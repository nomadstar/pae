import ProfileFoto from "../../components/ProfileFoto"
import "./profilenav.css"

const ProfileNav = () => {
    return (
        <div className='profilenav__container'>
            <div className="profilenav__image">
                < ProfileFoto imagen="" nombre=""/>
            </div>
            <div className="profilenav__profile">
                <button id="b1e">MIS CONSULTAS</button>
                <button>EDITAR CUENTA</button>
                <button>MI HISTORIA CLÍNICA</button>
                <button>MIS ACTIVIDADES</button>
                <button id="b2e">VER PREGUNTAS FRECUENTES</button>
            </div>
        </div>
    )
}

export default ProfileNav