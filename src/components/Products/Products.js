import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ProductsList from "../ProductsList/ProductsList";
import Product from "../Product/Product";

// The Roster component matches one of two different routes
// depending on the full pathname
const Products = () => (
    <Switch>
        <Route exact path='/products' component={ProductsList}/>
        <Route path='/products/:id' component={Product}/>
    </Switch>
);


export default Products
