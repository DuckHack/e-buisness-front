import React, {Component} from 'react';


import {OAuth} from './components/Login/Login'
import LoginRedirect from "./components/AuthRedirect/AuthRedirect";

class Login extends Component {

    constructor() {
        super();

        this.state = {
            redirectToReferrer: false
        };
    }


    componentWillMount =() => {
        OAuth.authenticate( () => {
            this.setState({ redirectToReferrer: true });
        }, this.props.location.pathname + this.props.location.search);

    };


    render() {
        return (
            <LoginRedirect/>
        );
    }

}

export default Login;