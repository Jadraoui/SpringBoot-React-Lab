import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
//import './App.css';
import Bienvenue from './Components/Bienvenue';
import Navigationbar from './Components/Navigationbar';
import Voiture from './Components/Voiture';
import Voitureliste from './Components/Voitureliste';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    const marginTop = { marginTop:"20px"}
    return (
        <Router>
          <Navigationbar/>
            <Container>
              <Row>
                <Col lg={12} style={marginTop}>
                  <Switch>
                  <Route path="/" exact component={Bienvenue}/>
                  <Route path="/add" exact component={Voiture}/>
                  <Route path="/list" exact component={Voitureliste}/>
                  </Switch>
                </Col>
              </Row>
            </Container>
            <Footer />
        </Router>
    );
  }
}

export default App;
