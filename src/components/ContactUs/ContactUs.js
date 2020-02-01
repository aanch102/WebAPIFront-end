import React from 'react'
import { 
  Form, Button
} from 'react-bootstrap'
import Axios from 'axios';
import 'mdbreact/dist/css/mdb.css'
import { Container,MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBView, MDBIcon} from 'mdbreact';
import { Redirect } from 'react-router-dom';
class Registration extends React.Component {

constructor(){
  super()

  this.state = {

    email:'',
    fullname:'',
   message:'',
    redirect:false

  }
}
 

emailChangeHandler = (event) => {

/*if(event.target.value.length < 6){
  this.setState({validationMessage:'Username Cannot be less than 6 chars '})
}*/

  this.setState({email: event.target.value})
}

fullnameChangeHandler = (event) => {

this.setState({fullname: event.target.value})
  
}
messageChangeHandler = (event) => {

this.setState({message: event.target.value})
  
}



formSubmitHandler = (e) => {
  e.preventDefault()


// use API call to post the data 
//fetch byt default JS
// Axios external package

var headers = {

'Content-Type':'application/json'
// not 'x-form-urlencded '

}

var data = {

  email:this.state.email,
  fullname:this.state.fullname,
  message:this.state.message

}

//mfetch method XMLHTTPREquest
  Axios.post('http://localhost:3000/feedback/addFeedback', data , headers)

.then( (response) => {
  console.log(response.data.status);
  if(response.status === 200){

    this.setState({redirect:true})

    // redirect to login page 
  }



})
.catch( (err) =>  {

})


  // console.log(this.state)
}

render(){

//what to render based in state

if(this.state.redirect){

return (
  <Redirect to='/contactus' />
  )

// toast message

}
  return(
<Container>
<div>
 <MDBContainer style={{
  
   
 }}>
       <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
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
                    label=" Enter Fullname" value={this.state.fullname} onChange={this.fullnameChangeHandler}
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Enter your Address" value={this.state.message} onChange={this.messageChangeHandler}
                    icon="home"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  
                 
                </div>

                <div className="text-center py-4 mt-3">
                  <MDBBtn color="cyan" type="submit">
                    Register
                  </MDBBtn>
                  </div>
                  </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
        
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.31625953295!2d85.29111307713657!3d27.70895594436762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1580567680698!5m2!1sen!2snp"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
             
              <p>Kathmandu</p>
              <p className="mb-md-0">United States</p>
            </MDBCol>
            <MDBCol md="4">
              
              <p>+977-986074665</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              
              <p>info@gmail.com</p>
              <p className="mb-md-0">sale@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    
      </div>
      </Container>
  );
}};

export default Registration;