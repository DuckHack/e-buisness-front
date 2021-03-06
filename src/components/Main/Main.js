import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Products from '../Products/Products'
import {PrivateRoute} from '../Login/Login'
import UserPage from '../UserPage/UserPage'
import AdminPage from '../AdminPage/AdminPage'
import Auth from '../../Auth.js'
// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"


const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/products' component={Products}/>
            <Route path='/authenticate' component={Auth}/>
            //TODO don't forget change to PrivateRout
            <PrivateRoute path='/userpage' component={UserPage}/>
            {/*<Route path='/userpage' component={UserPage}/>*/}
            <Route path='/adminpage' component={AdminPage}/>
        </Switch>
    </main>
);


export default Main
