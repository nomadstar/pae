import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProfileNav from "../containers/ProfileNav"
import "./pages.css"

const Profile = () => {
    return (
        <div className="profile__container">
            <Navbar />
            <main className="profile__main">
                <ProfileNav />
                <div className="profile__content">
                    NO HAY CONTENIDO
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Profile