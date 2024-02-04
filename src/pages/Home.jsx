import Navbar from "../components/navbar/Navbar";
import Header from "../containers/header/Header";
import Main from "../containers/main/Main";
import "./pages.css"

const Home = () => {

  return (
    <div className='home__container'>
      <Navbar/>
      <Header/>
      <Main/>
    </div>
  )
}

export default Home