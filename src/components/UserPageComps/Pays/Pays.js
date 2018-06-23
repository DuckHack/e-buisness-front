import React, {Component} from 'react';
import {BasketData, OAuth} from "../../Login/Login";

class Pays extends Component{
    constructor(){
        super();
        this.state ={
            compState: "Loading",
            fetchedPays: [],
        };
        this.request_data();
    }


    request_data = async function () {
        let orderID = sessionStorage.getItem('orderID');
        if(orderID === null){
            this.setState({compState: "You haven't pays yet"});
            return;
        }
        var url = await "http://localhost:9090/pays/get/" + BasketData.basket_data.id;

        const response = await fetch(url, {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'
        });

        var json_response = await response.json();
        console.log(json_response);
        await this.setState({fetchedPays: json_response});

    };



    render(){
	let pays = [];
        if(!this.state.fetchedPays.length){
            return(
                <div>
                    <h1>
                        Pays page
                    </h1>
                    <p>{this.state.compState}</p>
                </div>
            );
        }else{
            this.state.fetchedPays.forEach((el) =>
                pays.push(
                    <li>
                        <div>
                            <h3>Pay</h3>
                            <p>ID {el.id}</p>
                            <p>Cost {el.total}</p>
                            <p>Order id {el.order_id}</p>
                        </div>
                    </li>
                )
            );
            return(
                <div>
                    <h1>
                        Pays page
                    </h1>
                    <h3>{pays}</h3>
                </div>
            );
        }
    }
}


export default Pays;
