import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class ProductsList extends Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <h1>Products list</h1>
                    <ul>
                        <Link to={`/products/${1}`}><li>Prod1</li></Link>
                        <Link to={`/products/${2}`}><li>Prod2</li></Link>
                        <Link to={`/products/${3}`}><li>Prod3</li></Link>
                    </ul>
            </div>
        );
    }
}

export default ProductsList;