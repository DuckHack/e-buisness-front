import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddProductForm from '../AddProductForm/AddProductForm'
import AddKeyword from '../AddKeyword/AddKeyword'
import AddProductType from '../AddProductType/AddProductType'
import AddBasket from '../AddBasket/AddBasket'

// The Roster component matches one of two different routes
// depending on the full pathname
const AdminForms = () => (
    <div className={'CurrentAdminForm'}>
        <Switch>
            <Route exact path='/adminpage/AddProduct' component={AddProductForm}/>
            <Route path='/adminpage/AddProductType' component={AddProductType}/>
            <Route path='/adminpage/AddKeyWord' component={AddKeyword}/>
            <Route path='/adminpage/AddBasket' component={AddBasket}/>
        </Switch>
    </div>
);


export default AdminForms;
