import React from 'react'
import "../navbar/navbar.css"

const Contact = () => {
    return (
        <div className='footer__contact-container special'>
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
    )
}

export default Contact