import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className='nav'>
        <Navbar fixedTop={true} bsStyle='inverse'>
          <Navbar.Header>
            <Navbar.Brand>
              <a id="brand-logo" href='#home'>J/Y</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight={true}>
              <NavItem eventKey={1} href='#about'>&#60; About me /></NavItem>
              <NavItem eventKey={2} href='#skills'>&#60; Skills /></NavItem>
              <NavItem eventKey={3} href='#projects'>&#60; Projects /></NavItem>
              <NavItem eventKey={4} href='#contact'>&#60; Contact /></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
