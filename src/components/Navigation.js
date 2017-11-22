import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className='nav'>
        <Navbar fixedTop={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='#home'>Jonathan Yuen</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className='nav-right'>
              <NavItem eventKey={1} href='#about'>About me</NavItem>
              <NavItem eventKey={2} href='#skills'>Skills</NavItem>
              <NavItem eventKey={3} href='#projects'>Projects</NavItem>
              <NavItem eventKey={4} href='#contact'>Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
