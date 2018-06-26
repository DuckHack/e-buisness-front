import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { ButtonToolbar, Button} from 'react-bootstrap';
import {
    Route,
    withRouter,
    Redirect,
    BrowserRouter as Router,
} from "react-router-dom";


import OALogin  from '../../Auth'


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            logIn: '',
            signIn: '',
		basket: [],
            loadingMessage: "",
            isFetchFail: 2,
        };
    }

    render(){
        return(
            <Router>
                <div>
                    <Link to={`/adminpage`}>Admin page</Link>
                    <br/>
                    <Link to="/auth/google">Auth</Link>
                    <Route path="/auth/:id" component={OALogin}/>
                </div>
            </Router>
        );
    }
}


export const OAuth = {
    isAuthenticated: false,
    authenticatedData: [],
    basket_data: [],
    async authenticate(cb, provider_url) {
        try {
            var url = 'http://localhost:9090' + provider_url;

            const response = await fetch(url, {
                headers: {'Access-Control-Allow-Origin': '*'},
                method: 'GET',
                mode: 'cors'
            });

            var json_response = await response.json();
            this.authenticatedData = await json_response;

            if (response.status.valueOf() === 200) {
                this.isAuthenticated = await true;
                await sessionStorage.setItem('isAuth', 'true');
            }
        } catch (e) {
            console.log(e);
        }
        await sessionStorage.setItem('authData', this.authenticatedData.uuid);
        console.log(this.authenticatedData.uuid + " <- authenticatedData");
        console.log('Is auth -> ' + this.isAuthenticated);
        //create basket

        if(sessionStorage.getItem('isAuth') && sessionStorage.getItem('basketID') === null) {
            var url = await "http://localhost:9090/basket/add/" + sessionStorage.getItem('authData');
            const response = await fetch(url, {
                headers: {'Access-Control-Allow-Origin': '*'},
                method: 'GET',
                mode: 'cors'
            });
            var json_response = await response.json();
            OAuth.basket_data = await json_response;
            await sessionStorage.setItem('basketID', this.basket_data.id);
            await console.log(BasketData.get_basket("BasketID - > " + sessionStorage.getItem('basketID')));
        }

    },
    signout(cb) {
        console.log(this.authenticatedData + " <- authenticatedData");
        this.isAuthenticated = false;
        sessionStorage.setItem('isAuth', 'false');
        this.authenticatedData = [];
    }
};



const AuthButton = withRouter(
    ({ history }) =>
        OAuth.isAuthenticated ? (
            <ButtonToolbar>
                <p>
                    {OAuth.authenticatedData.user_email}  {" "}
                    <Button bsStyle="danger"
                            onClick={() => {
                                OAuth.signout(() => history.push("/"));
                            }}
                    >
                        Sign out
                    </Button>
                </p>
            </ButtonToolbar>
        ) : (
            <p>You are not logged in.</p>
        )
);

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            sessionStorage.getItem('isAuth') === 'true' ? (
            // OAuth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/authenticate",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);



export const BasketData = {
    basket_data: [],
    async get_basket(user_id)  {
            console.log("USER ID ->" + user_id);
            if(sessionStorage.getItem('basketID')){
                return;
            }
            var url = await "http://localhost:9090/basket/add/" + user_id;
            const response = await fetch(url, {
                headers: {'Access-Control-Allow-Origin': '*'},
                method: 'GET',
                mode: 'cors'
            });
            var json_response = await response.json();
            BasketData.basket_data = await json_response;
            await sessionStorage.setItem('basketID', this.basket_data.id);
            await console.log(BasketData.get_basket("BasketID - > " + sessionStorage.getItem('basketID')));
        //}
    }

};



export default Login;
