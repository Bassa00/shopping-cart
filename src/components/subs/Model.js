import React, { Component } from 'react'
import styled from 'styled-components';
import {ProductConsumer} from './Context'
import {ButtonContainer} from '../styles/Button'
import {Link} from 'react-router-dom'

export default class Model extends Component {
    render() {
        return (
            <div>
                <h1>Hello from model!</h1> 
            </div>
        )
    }
}
