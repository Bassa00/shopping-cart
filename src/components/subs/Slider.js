import React, { Component } from "react";
import {Carousel} from "react-bootstrap";

export default class Slider extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../pictures/slider/christmas-4645449_1280.jpg")}
            style={{height:'40rem'}}
            alt="First slide"
          />
          <Carousel.Caption>
          <h3 className="text-uppercase text-black-50 align-text-center" >First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../pictures/slider/horse-4572080_1280.jpg")}
            style={{height:'40rem'}}
            alt="Third slide"
          />

          <Carousel.Caption>
          <h3 className="text-uppercase text-black-50 align-text-center" >Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../pictures/slider/horse-4475581_1280.jpg")}
            style={{height:'40rem'}}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-uppercase text-black-50 align-text-center" >Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
