import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link}  from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
               <Navbar bg="dark" expand="lg">
  <Navbar.Brand style={{color:"white"}}  href="#home">Covid-19 Tracker </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link style={{color:"white"}}  className="nav-link" to="/india">India</Link>
      <Link style={{color:"white"}}  className="nav-link" to="/World">World</Link>
     
    </Nav>
  
  </Navbar.Collapse>
</Navbar> 
            </div>
        )
    }
}
