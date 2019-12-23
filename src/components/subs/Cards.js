import React, { Component } from "react";
import { Title } from '../subs/Title'
import {CardColumns, Card, Image} from "react-bootstrap";

export default class Cards extends Component {
  render() {
    return (
      <React.Fragment>
          <Image className="px-5 pt-4" src={require("../../pictures/slider/ride-1722429_1280.jpg")} style={{height:'25rem', width:'100rem'}} fluid />
          <div className="container-fluid padding">
                    <div className="row welcome text-center">
                        <div className="col-12">
                            <Title name='New' title='Products' />
                        </div>
                    </div>
                </div>
        <CardColumns className="px-5 pt-4">
          <Card>
            <Card.Img variant="top" src={require("../../pictures/987010.png")} style={{height:'25rem', width:'25rem'}} />
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={require("../../pictures/918131.png")} style={{height:'25rem', width:'25rem'}}/>
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={require("../../pictures/979840(1).png")} style={{height:'25rem', width:'25rem'}}/>
            <Card.Body>
              <Card.Title>Card title that wraps to a new line</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardColumns>
      </React.Fragment>
    );
  }
}
