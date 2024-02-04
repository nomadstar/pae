import Whatis from "../../components/Whatis"
import Pro from "../../components/Pro"
import Comments from "../../components/Comments"
import Footer from "../../components/Footer"
import "./main.css"

const Main = () => {
    return (
        <div className='main__container'>
            <Whatis/>
            <Pro/>
            <Comments/>
            <Footer/>
        </div>
    )
}

export default Main