import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Products from '../Products/Products'
import Login from '../Login/Login'
import UserPage from '../UserPage/UserPage'
import AdminPage from '../AdminPage/AdminPage'

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
            <Route path='/login' component={Login}/>
            <Route path='/userpage' component={UserPage}/>
            <Route path='/adminpage' component={AdminPage}/>
        </Switch>
    </main>
);


export default Main
