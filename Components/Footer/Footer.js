import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import insta_icon from '../Assets/instagram _icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="logo" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={insta_icon} alt="icon" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="icon" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2024 - All Right Reserved. </p>
            </div>
        </div>
    )
}

export default Footer
