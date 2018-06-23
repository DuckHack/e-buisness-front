import React from 'react'
import { Switch, Route } from 'react-router-dom'
import EditProductForm from '../EditProductForm/EditProductForm'
import EditKeyword from '../EditKeyword/EditKeyword'
import EditProductType from '../EditProductType/EditProductType'
import EditBasket from '../EditBasket/EditBasket'
import EditOpinion from '../EditOpinion/EditOpinion'
import EditOrder from '../EditOrders/EditOrders'
import EditPay from '../EditPays/EditPays'

// The Roster component matches one of two different routes
// depending on the full pathname
const AdminForms = () => (
    <div className={'CurrentAdminForm'}>
        <Switch>
            <Route exact path='/adminpage/editProduct' component={EditProductForm}/>
            <Route path='/adminpage/editProductType' component={EditProductType}/>
            <Route path='/adminpage/editKeyWord' component={EditKeyword}/>
            <Route path='/adminpage/editBasket' component={EditBasket}/>
            <Route path='/adminpage/editOpinion' component={EditOpinion}/>
            <Route path='/adminpage/editOrder' component={EditOrder}/>
            <Route path='/adminpage/editPay' component={EditPay}/>
        </Switch>
    </div>
);


export default AdminForms;
