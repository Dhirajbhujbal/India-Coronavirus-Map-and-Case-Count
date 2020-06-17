import React, { Component } from 'react';
import NavigationBar from './navigation-bar';
import { withRouter, Link } from 'react-router-dom';
import menuPng from '../../assets/menu.png';

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
                                <img alt='dhiraj.bhujbal.img' src='https://scontent.fpnq7-1.fna.fbcdn.net/v/t1.0-9/67138449_2277695688974706_6795887681143308288_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=Yjla4_k2PWsAX-wvSbc&_nc_ht=scontent.fpnq7-1.fna&oh=ed741dc9dc7750470c50bae579dbf544&oe=5F0B958B'/>
                            </div>
                            <div>
                                 <p>Dhiraj Bhujbal</p>
                            </div>
                        </div>
                        <hr />
                        <div onClick={ () => this.closeDrawer() } className='nav-links'>
                            <Link to="/">Covid-19 Case Count</Link>
                            <Link to='/news'>News</Link>
                            <Link to='/about-us'>About US</Link>
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