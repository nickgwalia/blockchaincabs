import React, { Component } from 'react'
import { Jumbotron, Button, Row, Col, Container } from 'reactstrap'

import slideImage from './../../assets/images/sutter.jpg'
import travelImage from './../../assets/images/traveling2977176__340.jpg'

const style = {
  mainSlider: {
    color: 'white',
    backgroundImage: `url(${slideImage})`,
    backgroundColor: '#000',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}

class Slide extends Component {
  render() {
    return (

      <Jumbotron fluid style={style.mainSlider}>
        <Container>
          <Row>
            <Col sm="8" xs="12">
              <h1 className="display-4 pb-5">Ridesharing For The People Of London</h1>
              <Row>
              <Col sm="7">
                {/* <p className="text-left">
                  <i className="fas fa-ellipsis-h"></i> <i class="fas fa-car-side"></i> <i className="fas fa-ellipsis-h"></i>
                </p> */}
                
                <p className="lead pt-3 pb-3">Blockchain Cabs is peer-to-peer anything and everything — with several networks built by local communities, rather than corporations.</p>
                
                <p className="lead  pt-3 pb-3">Download the app today and get connected with drivers close to you.</p>
                
                <p className="lead clearfix pt-5">
                  <Button color="primary" size="lg">Android <i className="fab fa-android"></i></Button>
                  <Button color="primary" size="lg" className="float-right"><i className="fas fa-mobile-alt"></i> iOS</Button>
                </p>
                </Col>
                </Row>
            </Col>
            <Col sm={{ size: 'auto', offset: 1 }}>
              <img src={travelImage} />
            </Col>
          </Row>
        </Container>
      </Jumbotron>

    )
  }
}

export default Slide