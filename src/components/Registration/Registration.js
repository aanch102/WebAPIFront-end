import React from 'react'
import { 
  Form, Button
} from 'react-bootstrap'
import Axios from 'axios';
import 'mdbreact/dist/css/mdb.css'
import { Container,MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBView} from 'mdbreact';
import { Redirect } from 'react-router-dom';
class Registration extends React.Component {

constructor(){
  super()

  this.state = {

    email:'',
    fullname:'',
    password:'',
    address:'',
    image:'',
    validationMessage:'',
    redirect:false

  }
}
 handleFileSelected = event => {
        this.setState({image: event.target.files[0]})
        //for image url
        let reader = new FileReader();

        reader.onloadend = () => {
            this.setState({imagePreviewUrl: reader.result});
        }

        reader.readAsDataURL(event.target.files[0])
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
addressChangeHandler = (event) => {

this.setState({address: event.target.value})
  
}

passwordChangeHandler = (event) => {

this.setState({password: event.target.value})
  
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
const fd = new FormData();
            const imageName = this
                .state
                .image
                .name
                .toLowerCase();
            fd.append('imageFile', this.state.image, imageName);
            Axios
                .post('http://localhost:3000/upload', fd)
                .then(res => {
                    console.log(res);

var data = {

  email:this.state.email,
  fullname:this.state.fullname,
  address:this.state.address,
  password:this.state.password,
  image:'imageFile-' + imageName

}

//mfetch method XMLHTTPREquest
  Axios.post('http://localhost:3000/users/signup', data , headers)

.then( (response) => {
  console.log(response.data.status);
  if(response.status === 200){

    this.setState({redirect:true})

    // redirect to login page 
  }



})
.catch( (err) =>  {

})

})

  // console.log(this.state)
}

render(){

//what to render based in state

if(this.state.redirect){

return (
  <Redirect to='/login' />
  )

// toast message

}
  return(
<Container>
<div>
 <MDBContainer style={{
  
   backgroundImage:
                'url(assets/fan.jpg)'
 }}>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody style ={{

            }}>
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
                    label="Enter your Address" value={this.state.address} onChange={this.addressChangeHandler}
                    icon="home"
                    group
                    type="text"
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
                    <MDBInput
                    type="file"
                                    inputProps={{
                                    accept: 'image/*'
                                }}
                                    name="avatar"
                                    onChange={this.handleFileSelected}
                                    ref={fileInput => this.fileInput = fileInput}/>
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
                    Register
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

export default Registration;