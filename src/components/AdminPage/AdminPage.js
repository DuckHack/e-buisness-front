import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import AdminForms from '../Forms/AdminForms/AdminForms';


class AdminPage extends Component{
    render(){
        return(
            <div>
                <h1>
                    Admin Page
                </h1>
                <ul>
                    <Link to='/adminpage/editProduct'><li>Edit product</li></Link>
                    <Link to='/adminpage/editProductType'><li>Edit product Type</li></Link>
                    <Link to='/adminpage/editKeyWord'><li>Edit keyword</li></Link>
                    <Link to='/adminpage/editBasket'><li>Edit Basket</li></Link>
                    <Link to='/adminpage/editOpinion'><li>Edit Opinion</li></Link>
                    <Link to='/adminpage/editOrder'><li>Edit Order</li></Link>
                    <Link to='/adminpage/editPay'><li>Edit Pay</li></Link>
                </ul>
                <AdminForms/>
            </div>
        );
    }
}


export default AdminPage;