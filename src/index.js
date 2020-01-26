import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import{
  BrowserRouter as Router,
  Switch,
  Link,
  Route

} from 'react-router-dom'
import{
  Nav,Container,Row,Col,Card,Navbar,Form,Button,FormControl

} from 'react-bootstrap'


import Login from './components/Login/Login' 
import Registration from './components/Registration/Registration' 
import ContactUs from './components/ContactUs/ContactUs' 
//import logo from '../public/assets/' 
import Home from './components/Home/Home' 

import Carousel from 'react-bootstrap/Carousel'


class Index extends React.Component{
  constructor(){
        super()
  }

        Footer = () => {
         return ( 
<div style ={{
  padding:"20px",
  backgroundColor: "lightblue",
  marginTop:"200px"
 
}}>
          <Row>
          <Col md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </Col>
          <Col md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </Col>
        </Row>
 <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright: Little black bird bookstore
        </Container>
      </div>
        </div>
      
                )

    }

  render(){
    return(
      
      <Container>
      <div>{/* for wrapping jsx components or use Fragment <> </> */}
      <Router>
          <div style={{
            padding:"10px",

          }}>
              <Navbar bg="navbar-light bg-dark"    variant="white">
                <Navbar.Brand href="#home">
  
                  Little black bird bookstore
                </Navbar.Brand>
                <Nav variant="pills">
              <Nav.Item>
                <Nav.Link as={Link} to="/home" >Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/aboutus">AboutUs</Nav.Link>
              </Nav.Item>
               <Nav.Item>
                <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
              </Nav.Item>
               <Nav.Item>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </Nav.Item>
               <Nav.Item>
                <Nav.Link as={Link} to="/contactUs">ContactUs</Nav.Link>
              </Nav.Item>
              </Nav>
             </Navbar>
             </div>


   <Switch>

            <Route exact path="/home">
              < Home/>
            </Route>

            <Route path="/home" component={Home}/>
          </Switch>
          
          <Switch>

            <Route exact path="/login">
              < Login/>
            </Route>

            <Route path="/login" component={Login}/>
          </Switch>
          <Switch>

            <Route exact path="/registration">

              < Registration/>

            </Route>
            <Route path="/registration" component={Registration}/>

          </Switch>
          <Switch>

            <Route exact path="/contactUs">

              < ContactUs/>

            </Route>
            <Route path="/contactUs" component={ContactUs}/>

          </Switch>
      </Router>
       </div>

  <this.Footer/>
            </Container>
             


         
        
  

    )
  
  }
}

ReactDOM.render(<Index/>,document.getElementById('root'))





