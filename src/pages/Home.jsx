import Navbar from "../components/Navbar";
import Header from "../containers/Header";
import Main from "../containers/Main";
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