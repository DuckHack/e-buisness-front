import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import './AuthRedirect.css'



class LogOutRed extends Component {
    render() {

        if (sessionStorage.getItem('isAuth')) {
            return <Redirect to="/" />;
        }

        return (
            <div className={'GLogo'}>
                <a className={'linkButton'} href={'http://localhost:9090/authenticate/google'}>
                    Log out
                </a>
            </div>
        );
    }

}

export default LogOutRed;