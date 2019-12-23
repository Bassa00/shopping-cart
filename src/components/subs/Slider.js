import React, { Component } from "react";
import {Carousel} from "react-bootstrap";

export default class Slider extends Component {
  render() {
    return (
      <Carousel className="px-5 pt-4" >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../pictures/slider/horse-3168576_1280.jpg")}
            style={{height:'40rem'}}
            alt="First slide"
          />
          <Carousel.Caption>
          <h1 className="display-2">First slide label</h1>
            <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
            <button type="button" className="btn btn-outline-light btn-lg">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../pictures/slider/seaside-1031450_1280.jpg")}
            style={{height:'40rem'}}
            alt="Third slide"
          />

          <Carousel.Caption>
          <h1 className="display-2">Second slide label</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <button type="button" className="btn btn-outline-light btn-lg">Shop Now</button>
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
          <h1 className="display-2">Third slide label</h1>
            <h3 className="text-black-50">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
            <button type="button" className="btn btn-outline-light btn-lg">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../../pictures/slider/sunset-1722437_1280.jpg")}
            style={{height:'40rem'}}
            alt="First slide"
          />
          <Carousel.Caption>
          <h1 className="display-2">Fourth slide label</h1>
            <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
            <button type="button" className="btn btn-outline-light btn-lg">Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
