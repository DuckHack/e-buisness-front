import React, {Component} from 'react';
import {BasketData} from "../../Login/Login";
import {Grid, Row, Col} from 'react-bootstrap';


class Orders extends Component{
    constructor(){
        super();
        this.state ={
            compState: "Czekaj",
            pageTitle: "Twoje zamowienia",
            fetchedOrders: [],
        };
        this.request_data();
    }


    request_data = async function () {
        var url = await "http://localhost:9090/orders/getorders/" + sessionStorage.getItem('basketID');

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
                    <h1>{this.state.pageTitle}</h1>
                    <p>{this.state.compState}</p>
                </div>
            );
        }else{
            let orders = [];
            let counter = 0;
            this.state.fetchedOrders.forEach((el) => {
                counter++;
                orders.push(
                    <Row>
                        <Col sm={6} md={3} lg={8}>
                            <h3>{counter} - Zamowienie</h3>
                            <h4>{el.id}</h4>
                            <p> Cost - {el.total}</p><br/>
                        </Col>
                    </Row>
                );
            });
            return(
                <div>
                    <h1>{this.state.pageTitle}</h1>
                    <Grid>{orders}</Grid>
                </div>
            );
        }
    }
}


export default Orders;
