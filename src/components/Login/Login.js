import React from 'react'
import { 
  Form, Button
} from 'react-bootstrap'
import Axios from 'axios';
import 'mdbreact/dist/css/mdb.css'
import { Container,MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBView} from 'mdbreact';

import { Redirect } from 'react-router-dom';
class Login extends React.Component {

constructor(){
  super()

  this.state = {

    email:'',
   
    password:'',
   
    redirect:false

  }
}

emailChangeHandler = (event) => {

/*if(event.target.value.length < 6){
  this.setState({validationMessage:'Username Cannot be less than 6 chars '})
}*/

  this.setState({email: event.target.value})
}

passwordChangeHandler = (event) => {

this.setState({password: event.target.value})
  
}

formSubmitHandler = (e) => {
  e.preventDefault()



// use API call to post the data 
//fetch byt default JS
// Axios external package


// use API call to post the data 
//fetch byt default JS
// Axios external package


  console.log(this.state) // this sate js object
  // 1st url 
  // 2nd data JS object
  // 3rd header JS object 
var headers = {

'Content-Type':'application/json'

}
  Axios.post('http://localhost:3000/users/login', this.state , headers)
  .then(function(response){
    console.log(response.data);
    localStorage.setItem("user_token",response.data.userToken)

  })
  .catch(function(err){

  })


var data = {

  email:this.state.email,
  password:this.state.password

}


  // console.log(this.state)
}

render(){

//what to render based in state
  return(

// if(this.state.redirect == true){ 

//   //actual redirect work

// }
<Container>
<div>
 <MDBContainer style={{
  paddingLeft:"320px",
   backgroundImage:
                'url(assets/fan.jpg)'
 }}>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={this.formSubmitHandler} >
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                <MDBInput
                    label="Enter your email" value={this.state.email} onChange={this.emailChangeHandler}
                    icon="envolope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
    
                  
                  <MDBInput
                    label="Your password" value={this.state.password} onChange={this.passwordChangeHandler}
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                 {/* <MDBInput
                    label="Confirm password"
                    icon="lock"
                    group
                    type="password"
                    validate
                  />*/}
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Login
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    
      </div>
      </Container>
  );
}};

export default Login;