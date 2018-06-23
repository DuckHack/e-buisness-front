import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import './AuthRedirect.css'
import GLogo from '../../plus.svg'

import {OAuth} from '../Login/Login'

class LoginRedirect extends Component {

    constructor() {
        super();
        setTimeout(function() { this.setState({position: 1}); }.bind(this), 1500);
    }


    render() {

        if (OAuth.isAuthenticated) {
            return <Redirect to="/" />;
        }

        return (

            <div className={'GLogo'}>
                <a href={'http://localhost:9090/authenticate/google'}>
                    <img src={GLogo} />
                </a>
            </div>

/*
            <div>
                <form action="http://localhost:9090/authenticate/google">
                    <Button type="submit" bsStyle="primary">Google auth</Button>
                </form>
            </div>
*/
        );
    }

}

export default LoginRedirect;
