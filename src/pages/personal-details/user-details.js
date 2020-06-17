import React, { Component } from 'react';

export class UserDetails extends Component {

    componentDidMount() {
        console.log('-------', this.props.match.params.employeeName)
    }

    render() {
        return (
            <div>
                Hey there I' Am,  My Name is {this.props.match.params.employeeName}
            </div>
        )
    }
}