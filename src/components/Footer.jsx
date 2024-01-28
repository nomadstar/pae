import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import logo from "../assets/logo__footer.webp"

const Footer = () => {
  return (
    <footer className='footer__container' id='footer'>

      <div className='footer__logo'>
        <img src={logo} alt="logo" />
      </div>

      <div className='footer__terminos'>
        <h5>Links útiles</h5>
        <a target="_blank" href="https://pae.mimanualdelbebe.com/terminos-y-condiciones">Términos y Condiciones</a>
        <a href="/">Home</a>
        <a href="#whatispae">¿Quienes somos?</a>
        <a href="#pros">Profesionales</a>
      </div>

      <div className='footer__contact-container'>
        <h5>Síguenos</h5>
        <div className='footer__contact-c2'>
        <a href="https://www.facebook.com/Mimanualdelbebeyembarazo" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={32} />
        </a>
        <a href="https://www.instagram.com/mimanualdelbebe/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} />
        </a>
        <a href="https://www.youtube.com/user/Mimanualdelbebe" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={32} />
        </a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fmimanualdelbebe" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={32} />
        </a>
        </div>
      </div>

      <div className='footer__copyright-images'>
        <h5>Copyright y derechos</h5>
        <p>© Alola Connection Ltda.2024</p>
        <p>Images: Md Tanvirul Haque</p>
        <p>Images: Hight Quality Icons - Icons Design</p>
        <p>Images: Free Pick Images</p>
      </div>
  
    </footer>
  )
}

export default Footer