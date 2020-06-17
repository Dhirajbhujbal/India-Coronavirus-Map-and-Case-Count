import React from 'react';
import { Route } from 'react-router-dom';
import { AppFooter } from '../common/footer';
import AppHeader from '../common/header';

export const AppLayout = ({ component: Component, path, showNav }) => {
    return (
        <Route
            exact
            path={path}
            render={ (props) => {
                return ( <React.Fragment>
                    <AppHeader displayNav={showNav} />
                    <div className={`container ${(!showNav) ? 'noNav' : ''}`}>
                        <Component {...props} />
                    </div>
                    <AppFooter />
                    </React.Fragment>
                )
            }}
        />
    )
}