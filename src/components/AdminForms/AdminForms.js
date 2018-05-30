import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddProductForm from "../AddProductForm/AddProductForm";

// The Roster component matches one of two different routes
// depending on the full pathname
const AdminForms = () => (
    <div className={'CurrentAdminForm'}>
        <Switch>
            <Route exact path='/adminpage/AddProduct' component={AddProductForm}/>
            <Route path='/adminpage/AddCategory' component={AddProductForm}/>
            <Route path='/adminpage/AddProductType' component={AddProductForm}/>
            <Route path='/adminpage/AddKeyWord' component={AddProductForm}/>
        </Switch>
    </div>
);


export default AdminForms;
