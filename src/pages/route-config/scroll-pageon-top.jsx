import React, { useEffect, Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollPageOnTop extends Component {


    componentDidUpdate(prevProps) {
        console.log('prevProps.location ', prevProps.location)
        console.log('this.props.location ', this.props.location)
        if(prevProps.location.pathname !== this.props.location.pathname) {
            window.scrollTo(0,0)
        }
    }

    render() {
        return this.props.children
    }

}

export default withRouter(ScrollPageOnTop);