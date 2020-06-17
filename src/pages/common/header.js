import React, { Component } from 'react';
import NavigationBar from './navigation-bar';
import { withRouter, Link } from 'react-router-dom';
import menuPng from '../../assets/menu.png';
import dhirajImg from '../../assets/dhiraj.png';

class AppHeader extends Component {

    constructor() {
        super();
        this.state = {
            displayProfileSection: false,
            openHmMenu: false
        }
    }

    closeDrawer = () => {
        this.setState({ openHmMenu: false })
    }

    render () {
        const { displayNav } = this.props;
        


        return (
            <React.Fragment>
            <div className='appHeader'>
               <div className={`hamburger-menu ${ (this.state.openHmMenu) ? 'hm-open': ''}`}>
                    <div className='hamburger-item' >
                        <div className='profile-mg'>
                            <div>
                                <img alt='dhiraj.bhujbal.img' src={dhirajImg}/>
                            </div>
                            <div>
                                 <p>Devloped by : Dhiraj Bhujbal</p>
                            </div>
                        </div>
                        <hr />
                        <div onClick={ () => this.closeDrawer() } className='nav-links'>
                            <Link to="/">Home</Link>
                            {/* <Link to='/news'>News</Link>
                            <Link to='/about-us'>About US</Link> */}
                            {/* <Link to='/contact'>Contact</Link>
                            <Link to='/about-us'>About US</Link> */}
                        </div>

                    </div>
               </div>
               {
                   this.state.openHmMenu ? <div className={'overlay'} onClick={ () => this.closeDrawer() }/> : null
               }

               <div className='app-header-top'>
                   <div onClick={ () => this.setState({ openHmMenu: true})}>
                        <img alt='menu.png' className='menu-img' src={menuPng} />
                    </div>
                    {/* <div onClick={() => { this.setState({ displayProfileSection : !this.state.displayProfileSection})}}>
                        <p>Dhiraj Ravindra Bhujbal</p>
                    </div> */}
               </div>
               <div className={`user-profile-info ${ (this.state.displayProfileSection) ? 'transition': ''}`} >
                   Name : Dhiraj Ravindra Bhujbal <br />
                   Mobile: 9975956792 <br />
                   Email: dhiraj.bhujbal1994@gmail.com
               </div>
               {
                   (displayNav) ? <NavigationBar /> : null
               }
            </div>
            </React.Fragment>
        )
    }
}

export default withRouter(AppHeader)