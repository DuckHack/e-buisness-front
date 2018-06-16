import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Orders from '../UserPageComps/Orders/Orders'
import Basket from '../UserPageComps/Basket/Basket'
import Pays from '../UserPageComps/Pays/Pays'
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const UserPageRouter = () => (
    <main>
        <Switch>
            <Route path='/userpage/basket' component={Basket}/>
            <Route path='/userpage/orders' component={Orders}/>
            <Route path='/userpage/pays' component={Pays}/>
        </Switch>
    </main>
);


export default UserPageRouter;
