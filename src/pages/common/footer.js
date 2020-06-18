import React, { Component } from 'react';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkdin from '../../assets/linkdin.png';

export class AppFooter extends Component {
    render () {
        return (
            <div className='appFooter'>
               <div>
                    <p>Email : dhiraj.bhujbal1994@gmail.com</p> 
                    <p>Mobile : 9975956792</p>
                    <div className='social-media'>
                        <div>
                            <a href={'https://www.facebook.com/dhiraj.bhujbal/'} target='_blank'>
                                <img src={facebook} />
                            </a>
                        </div>
                        <div>
                            <a href={'https://www.instagram.com/dhiraj_bhujbal/'} target='_blank'>
                                <img src={instagram} />
                            </a>
                        </div>
                        <div>
                            <a href={'https://www.linkedin.com/in/dhiraj-bhujbal-288a99107/'} target='_blank'>
                                <img src={linkdin} />
                            </a>
                        </div>
                    </div>
               </div>
            </div>
        )
    }
}