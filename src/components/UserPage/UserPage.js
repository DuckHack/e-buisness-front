import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import UserPageRouter from "../UserPageRouter/UserPageRouter";
import {BasketData} from "../Login/Login";
import {OAuth} from '../Login/Login'

class UserPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLogged: false,
        }
    }


    componentDidMount() {
        if (BasketData.basket_data.length === 0) {
            BasketData.get_basket(OAuth.authenticatedData.uuid)
        }
    }


    render(){
        return (
            <div>
                <h1>
                    User Page
                </h1>
                <ul>
                    <li><Link to='/userpage/basket'>Basket</Link></li>
                    <li><Link to='/userpage/orders'>Orders</Link></li>
                    <li><Link to='/userpage/pays'>Pays</Link></li>
                </ul>
                <UserPageRouter/>
            </div>
            );

    }
}


export default UserPage;