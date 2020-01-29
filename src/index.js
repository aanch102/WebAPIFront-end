import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, Container,Row,Col,MDBFooter,MDBContainer,MDBRow,MDBCol,MDBIcon
} from "mdbreact";
import{
  BrowserRouter as Router,
  Switch,
  Link,
  Route

} from 'react-router-dom'



import Login from './components/Login/Login' 
import Registration from './components/Registration/Registration' 
import ContactUs from './components/ContactUs/ContactUs' 
import Aboutus from './components/Aboutus/Aboutus' 
import Carts from './components/Carts/Carts' 

import Home from './components/Home/Home' 

import Carousel from 'react-bootstrap/Carousel'


class Index extends React.Component{
  constructor(){
        super()
  }

        Footer = () => {
         return ( 
          <MDBFooter color="indigo" className="font-small pt-0">
      <MDBContainer  style={{
        marginTop:"150px"
      }}>
        <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">About us</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Products</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Awards</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Help</a>
            </h6>
          </MDBCol>
          <MDBCol md="2" className="b-3">
            <h6 className="title font-weight-bold">
              <a href="#!">Contact</a>
            </h6>
          </MDBCol>
        </MDBRow>
        <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
        <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
          <MDBCol md="8" sm="12" className="mt-5">
            <p style={{ lineHeight: "1.7rem" }}>
             
            </p>
          </MDBCol>
        </MDBRow>
        <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
        <MDBRow className="pb-3">
          <MDBCol md="12">
            <div className="mb-5 flex-center">
              <a className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus-g fa-lg white-text mr-md-4">

                </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-4"> </i>
              </a>
              <a className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text"> </i>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:
           <p>BlackBird.com</p>
        </MDBContainer>
      </div>
    </MDBFooter>
      
     )

    }

  render(){
   
      
     return (

      <Container>
      <div>

    <Router>
     <Container>
      
      <div>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Black Bird Bookstore</strong>
        </MDBNavbarBrand>
        <MDBCollapse id="navbarCollapse3"  navbar>
          <MDBNavbarNav left>
          <MDBNavItem active>
              <MDBNavLink as={Link} to="/home">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink as={Link} to="/login">login</MDBNavLink>
            </MDBNavItem>
             <MDBNavItem>
              <MDBNavLink as={Link} to="/aboutus">About our Books</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink as={Link} to="/registration">Registration</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink as={Link} to="/contactUs">Contact us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink as={Link} to="/carts">Your Cart</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          
        </MDBCollapse>
      </MDBNavbar>
      </div>
      
      </Container>
    

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
            <Route exact path="/aboutus">
              < Aboutus/>
            </Route>
            <Route path="/aboutus" component={Aboutus}/>
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
           <Switch>

            <Route exact path="/carts">

              < Carts/>

            </Route>
            <Route path="/carts" component={Carts}/>

          </Switch>
           
      </Router>
       </div>

  <this.Footer/>
          </Container>






    )

    
  }
}

ReactDOM.render(<Index/>,document.getElementById('root'))





