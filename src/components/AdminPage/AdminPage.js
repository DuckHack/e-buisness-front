import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import AdminForms from '../Forms/AdminForms/AdminForms';


class AdminPage extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h1>
                    Admin Page
                </h1>
                <ul>
                    <Link to='/adminpage/AddProduct'><li>Add product</li></Link>
                    <Link to='/adminpage/AddProductType'><li>Add product Type</li></Link>
                    <Link to='/adminpage/AddKeyWord'><li>Add keyword</li></Link>
                    <Link to='/adminpage/AddBasket'><li> Add Basket</li></Link>
                </ul>
                <AdminForms/>
            </div>
        );
    }
}
export default AdminPage;