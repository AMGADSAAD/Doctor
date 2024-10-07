import React from 'react';
import headerimg from '../ASSETS/doctor.7c2bc96d67d3eba1d64a.png';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSquare } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <header>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <h5>We Provide All Health Care Solution</h5>
                    <h2>Protect Your Health And Take Care To Of Your Health</h2>
                    <button><a href="#">READ MORE</a></button>
                    <span>+</span>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="header-box">
                        <img src={headerimg} alt="logo" />
                        <FontAwesomeIcon icon={faSquare}/>
                    </div>
                </div>
            </div>
        </div>
        
    </header>
  )
}

export default Home
