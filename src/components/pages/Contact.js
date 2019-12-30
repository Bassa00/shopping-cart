import React, { Component } from 'react';
import '../styles/css/linearicons.css';
import '../styles/css/owl.carousel.css';
import '../styles/css/themify-icons.css';
import '../styles/css/font-awesome.min.css';
import '../styles/css/nice-select.css';
import '../styles/css/nouislider.min.css';
import '../styles/css/bootstrap.css';
import '../styles/css/main.css';

export default class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>test</h1>
                        {/*<!-- Start Banner Area --> */}
                <section className="banner-area organic-breadcrumb">
                    <div className="container">
                        <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                            <div className="col-first">
                                <h1>Contact Us</h1>
                                <nav className="d-flex align-items-center">
                                    <a href="index.html">Home<span className="lnr lnr-arrow-right"></span></a>
                                    <a href="category.html">Contact</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>

{/* <!--================Contact Area =================--> */}
                <section className="contact_area section_gap_bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="contact_info">
                                    <div className="info_item">
                                        <i className="lnr lnr-home"></i>
                                        <h6>Raiņa iela 27</h6>
                                        <p>Liepāja, LV-3401</p>
                                    </div>
                                    <div className="info_item">
                                        <i className="lnr lnr-phone-handset"></i>
                                        <h6><a href="#">(+371) 1231 2312</a></h6>
                                        <p>Mon to Fri 9am to 6 pm</p>
                                    </div>
                                    <div className="info_item">
                                        <i className="lnr lnr-envelope"></i>
                                        <h6><a href="#">support@colorlib.com</a></h6>
                                        <p>Send us your query anytime!</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <form className="row contact_form" action="POST" netlify-honeypot="bot-field" data-netlify="true" id="contactForm" >
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" />
							            </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" />
							            </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" />
							            </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" id="message" rows="1" placeholder="Enter Message" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Message'"></textarea>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div data-netlify-recaptcha= "true"></div>
                                     </div>   
                                    <div className="col-md-12 text-right">
                                        <button type="submit" value="submit" className="primary-btn">Send Message</button>
                                    </div>
					            </form>
                            </div>
                        </div>
		            </div>
	            </section>
            </React.Fragment>
                                )
                            }
                        }
