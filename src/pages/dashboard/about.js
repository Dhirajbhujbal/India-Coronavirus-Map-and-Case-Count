import React, { Component } from 'react';


export class About extends Component {
    
    componentDidMount() {
        console.log('-----',  this.props)
    }

    render() {
        return (
            <div>
                About Loaded
            </div>
        )
    }
}