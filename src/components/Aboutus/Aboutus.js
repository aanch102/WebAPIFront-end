
import Axios from 'axios';
import 'mdbreact/dist/css/mdb.css'
import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn} from "mdbreact";

const BlogPage = () => {
  return (

    <div>
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Available Books
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Times Critics’ Top Books of 2019
The Times’s staff critics give their choices of the best fiction and nonfiction works of the year.
        </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="assets/fan.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="green-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="utensils" className="pr-2" />
               Top rated Books are available here!!!
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Dwight Garner</strong>
            </h3>
            <p>
             In the literary world, it has been a year of big, bold ambition.
              Novelists have stretched their canvases — writing a sentence that 
              runs for a thousand pages; charting the fate of three families in 
              Africa across four generations. Nonfiction writers have made 
              riveting narrative from sprawling, difficult material: 
              The Irish Troubles, the nuclear
              disaster at Chernobyl, the history of the Lakota tribe.
             And memoirists have confronted harrowing and profound subjects: Life in New Orleans during and after Hurricane Katrina; decades spent in solitary confinement; psychological abuse in intimate relationships. Below, The New York Times’s three daily book critics — Dwight Garner, Parul Sehgal and Jennifer Szalai — share their thoughts about their favorites among the books they reviewed this year, each list alphabetical by author.
            </p>
            <p>
              by
              <a href="#!">
                <strong>Carine Fox</strong>
              </a>
              , 19/08/2018
            </p>
            <MDBBtn color="success" size="md" className="waves-light ">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="7">
            <a href="#!" className="pink-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="image" className="pr-2" />
               Laxmi prasad devkota's Muna Madan
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>best selling book</strong>
            </h3>
            <p>
              Muna Madan is a short epic narrating the 
              tragic story of Muna & Madan written by Nepalese poet 
              Laxmi Prasad Devkota and one of the most popular works in Nepali literature. 
              Muna Madan is based on 
              an 18th-century ballad in Nepal Bhasa entitled Ji Waya La Lachhi Maduni.
            </p>
            <p>
              by<br/>
              
                <strong>Laxmi prasad devkota</strong>
              
              , 14/08/2018
            </p>
            <MDBBtn
              color="pink"
              size="md"
              className="mb-lg-0 mb-4 waves-light"
            >
              Read more
            </MDBBtn>
          </MDBCol>
          <MDBCol lg="2">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="assets/muna.jpeg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <hr className="my-5" />
        <MDBRow>
          <MDBCol lg="3">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="assets/boo.jpeg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <a href="#!" className="indigo-text">
              <h6 className="font-weight-bold mb-3">
                <MDBIcon icon="suitcase" className="pr-2" />
                Food
              </h6>
            </a>
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Title of the news</strong>
            </h3>
            <p>
             Karnali Blues is book written by Buddhi Sagar and 
             published by FinePrint publication, Nepal. 
             This book will soon be translated to 
             English by Michael Hutt, a well-known Professor of Nepali and  Himalayan Studies at the 
             School of Oriental And African Studies. The book will be published by Speaking Tiger 
             Books for South Asian regions like 
             Nepal, India, Pakistan, Bangladesh, Srilanka, Bhutan and Maldives.
            </p>
            <p>
              by
             <br/>
                <strong>Buddhi Sagar</strong>
              
              , 11/08/2018
            </p>
            <MDBBtn color="indigo" size="md" className="waves-light ">
              Read more
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>

   <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Why is it so great?
      </h2>
      <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        Here you can find different verieties of books in a buget.
         Shopping for books online helps you find
         the best possible price for just about any book you want. 
         If you’re in the market for rare, 
         collectible or autographed books, it’s much cheaper
         and faster to search online than it would be to call up local 
         used and independent bookstores that carry these types of items.
      </p>

      <MDBRow>
        <MDBCol md="4" className="md-0 mb-5">
          <MDBRow>
            <MDBCol lg="2" md="3" size="2">
              <MDBIcon icon="bullhorn" size="2x" className="blue-text" />
            </MDBCol>
            <MDBCol lg="10" md="9" size="10">
              <h4 className="font-weight-bold">Marketing</h4>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
              <MDBBtn color="primary" size="sm">
                Learn more
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="4" className="md-0 mb-5">
          <MDBRow>
            <MDBCol lg="2" md="3" size="2">
              <MDBIcon icon="cogs" size="2x" className="pink-text" />
            </MDBCol>
            <MDBCol lg="10" md="9" size="10">
              <h4 className="font-weight-bold">Customization</h4>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
              <MDBBtn color="pink" size="sm">
                Learn more
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="4" className="md-0 mb-5">
          <MDBRow>
            <MDBCol lg="2" md="3" size="2">
              <MDBIcon icon="tachometer-alt" size="2x" className="purple-text" />
            </MDBCol>
            <MDBCol lg="10" md="9" size="10">
              <h4 className="font-weight-bold">Support</h4>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </p>
              <MDBBtn color="purple" size="sm">
                Learn more
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
      </div>
  );
}

export default BlogPage;