import React from "react";
import { Carousel } from "react-bootstrap";
import climbing from "../assets/climbing.jpg";
import rome from "../assets/rome.jpg";
import engagement from "../assets/engagement.jpg";
import Footer from "./common/Footer";

export default function AboutMePage() {
  return (
    <div style={{ marginTop: 80 }}>
      <Carousel className="bg-dark align-content-center">
        <Carousel.Item style={{ height: 500 }} className="text-center">
          <img
            className="img-fluid"
            style={{ maxWidth: "80%" }}
            src={engagement}
            alt="First Slide"
          />
          <Carousel.Caption>
            <h3>Engagement</h3>
            <p>I got engaged in July 2020</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: 500 }}>
          <img
            className="d-block img-fluid text-center"
            src={climbing}
            alt="Second Slide"
          />

          <Carousel.Caption>
            <h3>Rock Climbing</h3>
            <p>Climbing at The Junction in London, ON</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: 500 }} className="text-center">
          <img
            className=" text-center"
            style={{ maxWidth: "80%" }}
            src={rome}
            alt="Third Slide"
          />

          <Carousel.Caption>
            <h3>Travel</h3>
            <p>Visiting Vatican City</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container" style={{ marginTop: 20, marginBottom: 20 }}>
        <div className="row">
          <div className="col-md-3 text-center">
            <h1 className="display-3">About Me</h1>
          </div>
          <div className="col">
            <p className="lead container text-center">
              <b>Who am I? </b>I am a fourth year software engineering student
              at Western University. I love spending time with my family and
              friends. I am getting married this May and cannot be more excited.
              I love to travel and had the oppurtunity to go to France and Italy
              last year. I enjoy rock climbing and it has proved a great way to
              stay in shape! I have always been fascinated by technology and
              love opportunies to learn. I am excited to have a job in the tech
              industry and develop my skills.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
