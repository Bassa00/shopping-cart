import React, { Component } from 'react'
import CompJackets from './CompJackets'
import CompBreeches from './CompBreeches'

export default class index extends Component {
    render() {
        return (
            <React.Fragment>
                <CompJackets />
                <CompBreeches/>
            </React.Fragment>
        )
    }
}
