import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import AdminForms from '../AdminForms/AdminForms';


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
                    <Link to='/adminpage/AddCategory'><li>Add Category</li></Link>
                    <Link to='/adminpage/AddProductType'><li>Add product Type</li></Link>
                    <Link to='/adminpage/AddKeyWord'><li>Add keyword</li></Link>
                </ul>
                <AdminForms/>
            </div>
        );
    }
}

// - produkty/kategorie,
//     - koszyk,
//     - zamówienia,
//     - płatności,
//     - opinie o produktach,
//     - typy produktów,
//     - słowa kluczowe (wyszukiwane).
//
export default AdminPage;