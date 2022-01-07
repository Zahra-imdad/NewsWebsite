import React, { Component } from 'react';
import Loading from '../img/loading.gif';

export default class Spinner extends Component {
    render() {
        return (
            <div>
                <img src={Loading} alt="Loading"></img>
            </div>
        )
    }
}
