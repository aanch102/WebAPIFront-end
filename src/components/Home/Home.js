import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import{
 Container

} from 'react-bootstrap'
class Home extends React.Component {

constructor(){
  super()

}
render(){
	return(
		<Container style ={{
			height:"200px"

		}} >
<Carousel>
  <Carousel.Item>
    <img
    height="350px"

      className="d-block w-100"
      src="https://trojantimes.net/wp-content/uploads/2019/03/top-10-confidence-books.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
      <p style ={{
      	color:"black"
      }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      height="350px"
      src="https://trojantimes.net/wp-content/uploads/2019/03/top-10-confidence-books.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
      <p  style ={{
      	color:"black"
      }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    height="350px"
      className="d-block w-100"
      src="/assets/housebook.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
     
      <p  style ={{
      	color:"black"
      }}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Container>)
}
}
export default Home;