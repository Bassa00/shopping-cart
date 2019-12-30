import React from 'react'

export const Banner = ({pageName, linkName}) => {
        return (
            <React.Fragment>
            {/*<!-- Start Banner Area --> */}
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>{pageName}</h1>
                            <nav className="d-flex align-items-center">
                                <a href="/">Home<span className="lnr lnr-arrow-right"></span></a>
                                <p>{linkName}</p>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
        )
}
