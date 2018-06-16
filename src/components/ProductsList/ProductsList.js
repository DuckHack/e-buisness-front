import React, {Component} from 'react';
import ProductElement from '../ProductElement/ProductElement'

class ProductsList extends Component{
    constructor(props){
        super(props);
        this.checkUser = this.checkUser.bind(this);
        this.state = {
        };
    }


    checkUser(){
	    console.log(sessionStorage.getItem("userID"));
        if(sessionStorage.getItem("userID") === '1'){
            console.log("We are logged!" + sessionStorage.getItem('userID'));
        }else{
            console.log("We are unlogged")
        }
    }


    render(){
        this.checkUser();
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
