import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component{
    render(){
        return(
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/userpage'>User page</Link></li>
                <li><Link to='/login'>Sign in or Sign up</Link></li>
            </ul>
        );
    }
}


export default NavBar;