import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='footer-logo' src={assets.logo} alt="" />
            <p>At TasteDash, we are passionate about bringing delicious, high-quality meals right to your doorstep. Our mission is to make your dining experience convenient, enjoyable, and memorable. Whether you're craving a quick snack or 
              a gourmet feast, we've got you covered with a diverse range of culinary delights from the best local restaurants and chefs.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-212-456-7890</li>
                <li>contact@TasteDash.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © TasteDash.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
