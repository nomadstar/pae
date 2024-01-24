import logo from "../assets/logo.webp"
import "./pages.css"

const Page404 = () => {
  return (
    <div className='page404__contenedor'>
      <img src={logo} alt="logo" />
      <p>¡Error! Pulse <a className='page404__link' href="/"><b>aquí</b></a> para volver.</p>
    </div>
  )
}

export default Page404