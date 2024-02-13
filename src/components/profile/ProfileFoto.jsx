import fotoPerfilNula from "../../assets/nofoto.webp"

const ProfileFoto = ({ imagen = "", name}) => {
    return (
        <div className='flex flex-col items-center justify-center w-full mb-6'>
            <div className=" w-32">
                <img src={imagen === "" ? fotoPerfilNula : imagen} alt="foto de perfil" />
            </div>
            <div>
                <h4 className="text-center text-lg font-semibold">{name}</h4>
            </div>
        </div>
    )
}

export default ProfileFoto