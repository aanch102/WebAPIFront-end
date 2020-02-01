/*import React, { Component } from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBtn } from "mdbreact";
import{

  Button,Container

} from 'react-bootstrap';
import axios from 'axios';
class Book extends Component{
 
     constructor() {
        super()
    
        this.state = {
             book:[],
             path:'',
        }
    }
    componentDidMount()
    {
        axios.get("http://localhost:3000/book")
        .then(res=>{
            console.log(res)
            this.setState({book:res.data,path:'http://localhost:3000/uploads/'})
        })
       
        .catch(err=>{
            console.log(err)
        })
    }
    
    render() {
          //this.state.posts
          const{book}=this.state
          return(

            <Container>
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our Treatments
      </h2>
      
      <MDBRow>
      {book.map(book => (
        <MDBCol lg="4" md="6" className="mb-lg-0 mb-4" key={book.id}>
          <MDBCard pricing className="black-text" style ={{
              
              padding:"50px"
            }}>
           
            <MDBCardBody className="striped green-striped card-background px-5" style ={{
              height:"500px",
            }}>
          
              <h3>
              <img
                className="img-fluid"
                src={this.state.path+book.imageB}
                alt="img"
              /></h3>
                  <p>
                  
                    Name: {book.BookName}
                    

                  </p>
                    <p>
                  
                    {book.BookPrice}
                    

                  </p>
                    <p>
                  
                    BookISBN no.: {book.BookISBN}
                    

                  </p>
        
               
              <MDBBtn rounded gradient="blue" className="mb-3 mt-3">
                Buy 
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        ))}
        </MDBRow>
        </section>
        </Container>

   
  );
}
}
export default Book;*/