import React from 'react'
import { 
  Form, Button
} from 'react-bootstrap'
import Axios from 'axios';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput,MDBCard,MDBCardBody } from 'mdbreact';

import { Redirect } from 'react-router-dom';
class ContactUs extends React.Component {

constructor(){
  super()

  this.state = {

    fullname:'',
    email:'',
    message:'',
    redirect:false

  }
}

fullnameChangeHandler = (event) => {

//if(event.target.value.length < 6)

  this.setState({fullname: event.target.value})
}

emailChangeHandler = (event) => {

this.setState({email: event.target.value})
  
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

  fullname:this.state.fullname,
  email:this.state.email,
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
  return(

<section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
       <strong> Contact us</strong>
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
        Please contact to us for any query and books. 
        we will try to update the books details and maintain our facilities
      </p>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard> 
            <MDBCardBody>
              <p className="dark-grey-text">
                We'll write rarely, but only the best content.
              </p>
              <form onSubmit={this.formSubmitHandler}>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name" value={this.state.fullname} onChange={this.fullnameChangeHandler}
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email" value={this.state.email} onChange={this.emailChangeHandler}
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject" value={this.state.message} onChange={this.messageChangeHandler}
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue">Submit</MDBBtn>
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
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
              <strong> Address</strong>
              <p>Kathmandu, Kalanki-13</p>
              <p className="mb-md-0">Nepal</p>
            </MDBCol>
            <MDBCol md="4">
              <strong> Phone number</strong>
              <p>+977-986756441</p>
              <p className="mb-md-0">Mon - Fri, 8:00-5:00</p>
            </MDBCol>
            <MDBCol md="4">
             <strong> Email address</strong>
              <p>bird@gmail.com</p>
              <p className="mb-md-0">bird@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>

    )
}
}

export default ContactUs;