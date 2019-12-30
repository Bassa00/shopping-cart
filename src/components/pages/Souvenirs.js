import React, { Component } from 'react';

export default class Souvenirs extends Component {
    render() {
        return (
            <React.Fragment>
            {/*<!-- Start Banner Area --> */}
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Souvenirs</h1>
                            <nav className="d-flex align-items-center">
                                <a href="/">Home<span className="lnr lnr-arrow-right"></span></a>
                                <a href="./Souvenirs">Souvenirs</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
        )
    }
}
