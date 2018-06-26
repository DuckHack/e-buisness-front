import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import './AuthRedirect.css'
import GLogo from '../../plus.svg'

import {OAuth} from '../Login/Login'

class LoginRedirect extends Component {

    constructor() {
        super();
        //setTimeout(function() { this.setState({position: 1}); }.bind(this), 1500);
    }


    render() {

        if (sessionStorage.getItem('isAuth')) {
            return <Redirect to="/" />;
        }

        return (
	<div className={'AuthBox'}>
		<div className={'GLogo'}>
                <a href={'http://localhost:9090/authenticate/google'}>
                    <img src={GLogo} />
                </a>
            </div>
		</div>
        );
    }

}

export default LoginRedirect;
