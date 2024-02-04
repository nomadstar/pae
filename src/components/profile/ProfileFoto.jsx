import fotoPerfilNula from "../assets/nofoto.webp"

const ProfileFoto = ({ imagen = "", name = "NOMBRE DE USUARIO" }) => {
    return (
        <div className='profilefoto__container'>
            <div className="profilefoto__container-image">
                <img src={imagen === "" ? fotoPerfilNula : imagen} alt="foto de perfil" />
            </div>
            <div>
                <h4 style={{textAlign: "center"}}>{name}</h4>
            </div>
            <button>SALIR</button>
        </div>
    )
}

export default ProfileFoto