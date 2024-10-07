import React from 'react'
import {Navbar ,Container ,NavDropdown , Nav} from 'react-bootstrap';
import "./Navbar.css";
import logo from '../../ASSETS/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Navbars = () => {
  return (
    <div>
         <Navbar expand="lg">
      <Container>
        <Navbar.Brand >
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='active'>Home</Link>
            <NavDropdown title="Bages" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">ABOUT US</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                OUR TEAM
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">BOOKING</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              FAQ'S
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              EROR 404
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                LOGIN/REGISTER
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">SERVICE</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              SERVICE DETAils
              </NavDropdown.Item>
              
              
            </NavDropdown>
            <NavDropdown title="BLOG" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">BLOG</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                BLOG DETAILS
              </NavDropdown.Item>
              
            </NavDropdown>
            <Link >Contact us</Link>
            <Nav.Link ><FontAwesomeIcon icon={faSearch}/></Nav.Link>
            <Nav.Link >
              <FontAwesomeIcon icon={faPhone} className='font-icon'/>
               +01 999 888 777</Nav.Link>
            <Nav.Link>
              <button>Contact us <span><FontAwesomeIcon icon={faArrowAltCircleRight}/></span></button>
              
            </Nav.Link> 
          
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  )
}

export default Navbars
