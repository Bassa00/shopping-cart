import React, { Component } from 'react'
import { Title } from '../subs/Title'

export default class Welcome extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid px-5 pt-4">
                    <div className="row welcome text-center">
                        <div className="col-12">
                            <Title name='' title='Kentaurs' />
                            <p className="lead">Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle.</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
