import React, {Component} from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import './Basket.css';
class Basket extends Component{
    constructor(){
        super();
        this.state ={
            compState: "Czekaj",
            pageTitle: "Twoj koszyk",
            delButtTitle: "Usun z koszyka",
            fetchedBasketProducts: [],
        };
        this.delProduct = this.delProduct.bind(this);
        this.makeOrder = this.makeOrder.bind(this);
        this.createOrder = this.createOrder.bind(this);
        this.request_data();
    }


    request_data = async function () {
        var url = await "http://localhost:9090/basketproducts/getbyid/" + sessionStorage.getItem('basketID');

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
        const basketID = sessionStorage.getItem('basketID');
        console.log("BasketID -> " + basketID);
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
		if(!this.state.fetchedBasketProducts.length){
			return(
				<div>
					<h1>{this.state.pageTitle}</h1>
					<p>{this.state.compState}</p>
				</div>
			);
		}else{
            let counter = 0;
			this.state.fetchedBasketProducts.forEach((el) =>{
				counter++;
			    tmpMountedProducts.push(
				   <Row>
                       <Col sm={6} md={3} lg={8}>
                           <h3>{counter} - Product</h3>
                           <h4>{el.name}</h4>
                           <p>{el.description}</p>
                           <p>Cena - {el.price}</p><br/>
                           <Button bsStyle="primary" onClick={this.delProduct.bind(this, el.id)}>{this.state.delButtTitle}</Button>
                       </Col>
                   </Row>
			    );
			});
			return(
				<div className={'basketBox'}>
					<h1>{this.state.pageTitle}</h1>
                    <div>
                        <Grid>
                            {tmpMountedProducts}
                        </Grid>
                    </div>
				    <Button bsStyle="primary" onClick={this.makeOrder.bind(this)}>Zamowic</Button>
				</div>
			);
		}
    }
}


export default Basket;
