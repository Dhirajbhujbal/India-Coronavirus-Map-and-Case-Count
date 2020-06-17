import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NavigationBar extends Component {

    tabsName = ['/home', '/news', '/contact' , '/about-us' ]
    constructor(props) {
        super(props);
        this.state = {
            activeTab: (this.props && this.props.location && this.props.location.pathname) ? this.tabsName.indexOf(this.props.location.pathname) : 0
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.location.pathname !== this.props.location.pathname) {
            this.setState({
                activeTab: (this.props && this.props.location && this.props.location.pathname) ? this.tabsName.indexOf(this.props.location.pathname) : 0
            })
        }
    }

    render() {

        return(
            <div className='navigationBarClass'>
                <div className='nav-item'>
                    <div className={ (this.state.activeTab === 0 || this.state.activeTab === -1) ? 'active' : 'no-active'}>
                       <Link to='/home'>Covid-19 Case Count</Link>
                    </div>
                    <div className={ (this.state.activeTab === 1) ? 'active' : 'no-active'}>
                        <Link to='/news'>News</Link>
                    </div>
                    {/* <div className={ (this.state.activeTab === 2) ? 'active' : 'no-active'}>
                        <Link to='/contact'>Contact</Link>
                    </div>
                    <div className={ (this.state.activeTab === 3) ? 'active' : 'no-active'}>
                        <Link to='/about-us'>About US</Link>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default withRouter(NavigationBar)