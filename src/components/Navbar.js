import React, { Component } from "react";
import navLogo from "./logo.svg";

export default class NavBar extends Component {

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{fontSize:'14px'}}>
                    <a className="navbar-brand" href="/">
                        <img
                        src={navLogo}
                        style={{ width: "3rem", height: "3rem" }}
                        alt="store"
                        className="navbar-brand"
                        />KENTAURS
                    </a>
                    <button
                    className="navbar-toggler sm-col-1"
                    type="button" data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        RIDER</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{fontSize:'12px'}}>
                                    <a className="dropdown-item" href="/pages/rider/CompJackets">COMPETITION JACKETS</a>
                                    <a className="dropdown-item" href="/pages/rider/CompBreeches">COMPETITION BREECHES</a>
                                    <a className="dropdown-item" href="/pages/rider/CompShirts">COMPETITION SHIRTS</a>
                                    <a className="dropdown-item" href="/pages/rider/CompAccessories">COMPETITION ACCESSORIES</a>
                                    <a className="dropdown-item" href="/pages/rider/Breeches">RIDING BREECHES</a>
                                    <a className="dropdown-item" href="/pages/rider/Shirts">RIDING SHIRTS</a>
                                    <a className="dropdown-item" href="/pages/rider/JacketsWaistcoats">RIDING JACKETS AND WAISTCOATS</a>
                                    <a className="dropdown-item" href="/pages/rider/Protectors">BODY PROTECTORS</a>
                                    <a className="dropdown-item" href="/pages/rider/Helmets">HELMETS</a>
                                    <a className="dropdown-item" href="/pages/rider/Gloves">GLOVES</a>
                                    <a className="dropdown-item" href="/pages/rider/Socks">SOCKS</a>
                                    <a className="dropdown-item" href="/pages/rider/Boots">BOOTS</a>
                                    <a className="dropdown-item" href="/pages/rider/Chaps">CHAPS</a>
                                    <a className="dropdown-item" href="/pages/rider/Spurs">SPURS</a>
                                    <a className="dropdown-item" href="/pages/rider/Straps">SPURS STRAPS</a>
                                    <a className="dropdown-item" href="/pages/rider/Whips">WHIPS</a>
                                    <a className="dropdown-item" href="/pages/rider/Hats">HATS</a>
                                    <a className="dropdown-item" href="/pages/rider/Safety">RAIN PROTECTION & SAFETY</a>
                                </div>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        HORSE</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" style={{fontSize:'12px'}}>
                                    <a className="dropdown-item" href="/">BITS & BIT ACCESSORIES</a>
                                    <a className="dropdown-item" href="/">HEADCOLLARS & HEADCOLLAR ACCESSORIES</a>
                                    <a className="dropdown-item" href="/">LEAD ROPES</a>
                                    <a className="dropdown-item" href="/">TENDON AND FETLOCK BOOTS</a>
                                    <a className="dropdown-item" href="/">BANDAGES</a>
                                    <a className="dropdown-item" href="/">BANDAGES PADS</a>
                                    <a className="dropdown-item" href="/">OVERREACH BOOTS</a>
                                    <a className="dropdown-item" href="/">RUGS AND SHEETS</a>
                                    <a className="dropdown-item" href="/">FLY PROTECTION</a>
                                    <a className="dropdown-item" href="/">BRIDLES & BRIDLE ACCESSORIES</a>
                                    <a className="dropdown-item" href="/">REINS</a>
                                    <a className="dropdown-item" href="/">STIRRUPS</a>
                                    <a className="dropdown-item" href="/">STIRRUPS LEATHER</a>
                                    <a className="dropdown-item" href="/">GIRTHS</a>
                                    <a className="dropdown-item" href="/">SADDLE PADS AND BACK PROTECTION</a>
                                    <a className="dropdown-item" href="/">SADDLES & SADDLES ACCESSORIES</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">GROOMING EQUIPMENT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">GIFTS & SOUVENIRS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/pages/cart">
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <form className="form-inline" >
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{fontSize:'12px'}}/>
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit" style={{fontSize:'14px'}}>SEARCH</button>
                    </form>
                </nav>
            </React.Fragment>
        );
    }
}
