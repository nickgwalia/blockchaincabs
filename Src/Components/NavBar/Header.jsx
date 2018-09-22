import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Row,
  Col,
  Container
} from 'reactstrap';
import logo from './../../assets/images/logo-final.png'

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <section style={{ backgroundColor: '#ccc', borderColor: '#333' }} className="pt-3 pb-3">
          <Container>
          <Row>
            <Col xs="8">
              <Row>
                <Col sm="4" xs="12"><i class="fas fa-dollar-sign"></i> Fixed Rate</Col>
                <Col sm="4" xs="12"><i class="fas fa-wifi"></i> Free Wifi</Col>
                <Col sm="4" xs="12"><i class="fas fa-tint"></i> Free Water</Col>
              </Row>
              <Row>
                <Col sm="4" xs="12"><i class="fas fa-charging-station"></i> Free Phone Charger</Col>
                <Col sm="4" xs="12"><i class="fas fa-cookie"></i> Free Food, Meet & Greet</Col>
                <Col sm="4" xs="12"><i class="fas fa-plane"></i> Flight Tracking</Col>
              </Row>
            </Col>
            <Col xs="4" className="text-right">
              <Button color="primary">Get quote</Button>{' '}
              <Button color="secondary">My Account</Button>{' '}
              <Button color="success"><i class="fas fa-shopping-cart"></i> CART</Button>{' '}
            </Col>
          </Row>
          </Container>
        </section>
        <Navbar color="primary" dark expand="md">
          <div className="container">
          <NavbarBrand href="/">
            <img src={logo} alt="blockchain Cabs"/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">How it works</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">About us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Operator sign up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Faq</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default Header