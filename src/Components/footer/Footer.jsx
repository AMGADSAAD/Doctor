import React from 'react';
import './Footer.css';
import footerlogo from '../../ASSETS/logo.png';
import facebook from '../../ASSETS/facebook.png';
import tweeter from '../../ASSETS/tweeter.png';
import instgram from '../../ASSETS/instgram.png';
import linked from '../../ASSETS/linked in.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrownOpen, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons/faAlignLeft';
const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <img src={footerlogo} alt="logo"  className='footerlogo'/>
                    <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                    <div className="footer-contact">
                        <div className="footer-icon">
                        <FontAwesomeIcon icon={faPhone} className='font-icon'/>
                        </div>
                        <div className="footer-text">
                            <h6>Contact Us</h6>
                            <h4>+01 999 888 777</h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>Quick Links</h2>
                        <ul>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">services</a></li>
                            <li><a href="#">Booking</a></li>
                            <li><a href="#">Faq's</a></li>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Out Team</a></li>
                        </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>Our Service</h2>
                        <ul>
                            <li><a href="#">Dental</a></li>
                            <li><a href="#">Cardiac clinic</a></li>
                            <li><a href="#">Massege therapy</a></li>
                            <li><a href="#">Cardiolory</a></li>
                            <li><a href="#">Precise Diagnosis</a></li>
                            <li><a href="#">Abmbulance services</a></li>
                        </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <h2>Subcribe</h2>
                    <form>
                        <input type="email" placeholder='Email Address'  />
                        <button type='submite'>Subcribe Now</button>
                    </form>
                    <ul className="social">
                        <li><a href="#"><img src={facebook}/></a></li>
                        <li><a href="#"><img src={tweeter}/></a></li>
                        <li><a href="#"><img src={instgram}/></a></li>
                        <li><a href="#"><img src={linked}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-button">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <span>Copyright © 2023 Design & Developed by ThemeTrades</span>
                    </div>
                </div>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer




