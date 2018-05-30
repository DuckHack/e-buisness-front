import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='/login'>Sign in or Sign up</Link></li>
            </ul>
        );
    }
}

export default NavBar;