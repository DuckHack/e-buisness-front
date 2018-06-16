import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import UserPageRouter from "../UserPageRouter/UserPageRouter";

class UserPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLogged: false,
        }
    }


    componentWillMount(){
        let userID = sessionStorage.getItem("userID");
        if(userID !== null){
         	this.setState({isLogged: true});
         }
    }


    render(){
        if (!this.state.isLogged){
            return(
                <h1>Sorry, you must be logged</h1>
            );
        }else {
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
}


export default UserPage;