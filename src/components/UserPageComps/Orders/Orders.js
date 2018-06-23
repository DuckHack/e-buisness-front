import React, {Component} from 'react';
import {BasketData} from "../../Login/Login";


class Orders extends Component{
    constructor(){
        super();
        this.state ={
            compState: "Loading",
            fetchedOrders: [],
        };
        this.request_data();
    }


    request_data = async function () {
        var url = await "http://localhost:9090/orders/getorders/" + BasketData.basket_data.id;

        const response = await fetch(url, {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'
        });

        var json_response = await response.json();
        console.log(json_response);
        await this.setState({fetchedOrders: json_response});

    };


    render(){
        if(!this.state.fetchedOrders.length){
            return(
                <div>
                    <h1>
                        Orders page
                    </h1>
                    <p>{this.state.compState}</p>
                </div>
            );
        }else{
            let orders = [];
            this.state.fetchedOrders.forEach((el) =>
                orders.push(
                    <li>
                        <div>
                            <h3>Order</h3>
                            <p>ID {el.id}</p>
                            <p>Cost {el.total}</p>
                        </div>
                    </li>
                )
            );
            return(
                <div>
                    <h1>Orders list</h1>
                    <ul>{orders}</ul>
                </div>
            );
        }
    }
}


export default Orders;
