import React, { Component } from 'react';
import ListComponent from '../../Component/ListComponent/ListComponent';
export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {

        };
    }
    render() {


        return (
            <div>
                <h1 style={{ textAlign: 'center' }}> Dashboard</h1>
                <div>
                    <ListComponent />
                </div>
            </div>
        )
    }
}