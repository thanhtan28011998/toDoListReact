import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <Navbar color="info" light expand="md">
          <NavbarBrand href="/app">React</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/app">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/toDoListReact">Product</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
    </div>
    );
  }
}

export default App;
