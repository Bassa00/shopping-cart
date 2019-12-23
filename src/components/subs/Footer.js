import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid padding">
                    <div className="row text-center">
                        <div className="col-md-4">
                            <hr className="light" />
                                <h5>Contact</h5>
                                <p>555-555-555</p>
                                <p>info@kentaurs.com</p>
                                <p>100 street name, city, state, code</p>
                        </div>
                        <div className="col-md-4">
                            <hr className="light" />
                            <h5>Open Hours</h5>
                            <p>Mon-Fri : 09:00 - 17:00</p>
                            <p>Sat : 10:00 - 15:00 </p>
                            <p>Sun : Closed </p>
                        </div>
                        <div className="col-md-4">
                            <hr className="light" />
                            <h5>Follow Us</h5>
                            <p><a href="/"><i className="fab fa-facebook"></i></a></p> 
                            <p><a href="/"><i className="fab fa-twitter"></i></a></p> 
                            <p><a href="/"><i className="fab fa-instagram"></i></a></p> 
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
