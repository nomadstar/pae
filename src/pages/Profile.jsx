import {useState, useEffect} from "react"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/Footer"
import ProfileFoto from "../components/profile/ProfileFoto"
import Cuppon from "../components/profile/Cupones"
import "./profile.css"

const Profile = () => {
    const [showCuppon, setShowCuppon] = useState(true);
    const [admin, setAdmin] = useState(true);

    return (
        <div className="profile__container">
            <Navbar />
            <main className="profile__main">
                <div className="profile__aside w-1/5 flex flex-col justify-center items-center">
                    <ProfileFoto imagen="" name="NOMBRE DE USUARIO" />
                    <div className="w-full flex flex-col justify-center items-center gap-2">
                        {
                            admin && (
                                <p className="text-gray-800 flex gap-2 items-center w-2/3 justify-between cursor-pointer">Crear cupones</p>
                            )
                        }
                        <p className="text-gray-400 flex gap-2 items-center w-2/3 justify-between">
                            <p>Cerrar sesión</p>
                            <span class="icon-[fluent--presence-blocked-24-regular]"></span>
                        </p>
                        <p className="text-gray-400 flex gap-2 items-center w-2/3 justify-between">
                            Iniciar sesión
                            <span class="icon-[fluent--presence-blocked-24-regular]"></span>
                        </p>
                        <p className="text-gray-400 flex gap-2 items-center w-2/3 justify-between">
                        Actividades
                            <span class="icon-[fluent--presence-blocked-24-regular]"></span>
                        </p>
                        <p className="text-gray-400 flex gap-2 items-center w-2/3 justify-between">
                        Consultas
                            <span class="icon-[fluent--presence-blocked-24-regular]"></span>
                        </p>
                        <p className="text-gray-400 flex gap-2 items-center w-2/3 justify-between">
                        Editar perfil
                            <span class="icon-[fluent--presence-blocked-24-regular]"></span>
                        </p>
                        <p className="text-gray-400 flex gap-2 items-center w-2/3 justify-between">
                        Preguntas frecuentes
                            <span class="icon-[fluent--presence-blocked-24-regular]"></span>
                        </p>
                    </div>
                </div>
                <div className="profile__content">
                    {
                        showCuppon && (
                            <Cuppon />
                        )
                    }
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Profile