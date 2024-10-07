import React from 'react';
import Banner from '../Components/Banner/Banner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe, faHeart, faMap, faNairaSign, faPhone, faWalking } from '@fortawesome/free-solid-svg-icons';
import "./Contact.css";
import { faFaceDizzy } from '@fortawesome/free-solid-svg-icons/faFaceDizzy';
import { faReceipt } from '@fortawesome/free-solid-svg-icons/faReceipt';
import FormContact from './FormContact';

const Contact = () => {
  return (
    <>
       <Banner titele= "About Us" smtitele= "About Us"/>
       <section className='contact-us'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <FormContact />
            </div>

            <div className="col-lg-6 col-md-6">
                <div className="side">
                  <div className="overlay">
                    <h3>Contact Us For Any Informations</h3>
                    <li> <FontAwesomeIcon icon={faMap}/> 
                      Location
                    </li>
                    <hr/>
                    <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                    <li> <FontAwesomeIcon icon={faEnvelope}/> 
                    Email & Phone
                    </li>
                    <hr/>
                    <p>  info@yourdomain.com</p>
                    <p>(+68) 120034509</p>
                    <li> <FontAwesomeIcon icon={faGlobe}/> 
                    Follow Us
                    </li>
                    <ul>
                      <li><FontAwesomeIcon icon={faHeart}/></li>
                      <li><FontAwesomeIcon icon={faPhone}/></li>
                      <li><FontAwesomeIcon icon={faReceipt}/></li>
                    </ul>

                  </div>
                </div>
            </div>            
          </div>
        </div>

       </section>
    </>
  )
}

export default Contact

