import React, {Component} from 'react';
import {BasketData, OAuth} from "../../Login/Login";


class Basket extends Component{
    constructor(){
        super();
        this.state ={
            compState: "Loading",
            fetchedBasketProducts: [],
        };
        this.delProduct = this.delProduct.bind(this);
        this.makeOrder = this.makeOrder.bind(this);
        this.createOrder = this.createOrder.bind(this);
        this.request_data();
    }


    request_data = async function () {
        var url = await "http://localhost:9090/basketproducts/getbyid/" + BasketData.basket_data.id;

        const response = await fetch(url, {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'
        });

        var json_response = await response.json();
		console.log(json_response);
        await this.setState({fetchedBasketProducts: json_response});

    };


    delProduct(id){
	    console.log("delProduct inside");
        fetch(`http://localhost:9090/basketproducts/delbasketprod/${id}`, {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'DELETE',
	        mode: 'cors'
        });
    }

    //TODO dell all basket_prod where basket_id === basket_id, add basket_id, and total price to order table. add order_id to pay table
    makeOrder(){
        const basketID = BasketData.basket_data.id;
        let totalPrice = 0;
        //add order
        this.state.fetchedBasketProducts.forEach((e) =>
            {
                totalPrice += e.price;
                console.log(e.price);
            }
        );
        this.createOrder(basketID, totalPrice);
        //del basket products
	    console.log("del/basketID ->" + basketID);
        fetch(`http://localhost:9090/basketproducts/del/${basketID}`, {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'DELETE',
            mode: 'cors'
        });
        //add order

    }


    createOrder(basketID, price){
        fetch(`http://localhost:9090/orders/add/${basketID}/${price}`, {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'
        }).then(function(response) {return response.json();})
            .then((data) => {
                sessionStorage.setItem('orderID', data.id);
                fetch(`http://localhost:9090/pays/add/${data.id}`, {
                    headers: {'Access-Control-Allow-Origin': '*'},
                    method: 'POST',
                    mode: 'cors'
                });
            });
        }


    render(){
		let tmpMountedProducts = [];
	    	console.log(this.state.fetchedBasketProducts.length);
		if(!this.state.fetchedBasketProducts.length){
			return(
				<div>
					<h1>
						Basket page
					</h1>
					<p>{this.state.compState}</p>
				</div>
			);
		}else{
			let counter = 0;
			this.state.fetchedBasketProducts.forEach((el) =>{
				counter++;
			    tmpMountedProducts.push(
				<li>
				    <ul>
					<li>{counter} - Product</li>
					<li>{el.id}</li>
                        <li>{el.name}</li>
					<li>{el.price}</li>
					<li>{el.description}</li>
				    </ul>
					<br/>
                    <button onClick={this.delProduct.bind(this, el.id)}>Delete</button>
				</li>
			    );
			});
			return(
				<div>
					<h1>Basket page</h1>
                    <ul>
                        {tmpMountedProducts}
                    </ul>
				<button onClick={this.makeOrder.bind(this)}>Order</button>
				</div>
			);
		}
    }
}

/*
const OrderData = {
    order_data: [],
    createOrder(basketID, price) {
        console.log("createOrder ->" + basketID);
        var url = `http://localhost:9090/orders/add/${basketID}/${price}`;
        const response = fetch(url, {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'
        });
        var json_response = response.json();
        OrderData.orderData = json_response;
    }
};
*/

export default Basket;
