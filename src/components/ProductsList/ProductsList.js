import React, {Component} from 'react';
import ProductElement from '../ProductElement/ProductElement'

class ProductsList extends Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render(){
        return(
            <div>
                <h1>Products list</h1>
                <div>
                    <ProductElement/>
                </div>
            </div>
        );
    }
}

export default ProductsList;