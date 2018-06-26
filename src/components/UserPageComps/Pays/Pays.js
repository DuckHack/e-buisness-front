import React, {Component} from 'react';
import {BasketData, OAuth} from "../../Login/Login";
import {Grid, Row, Col} from 'react-bootstrap';


class Pays extends Component{
    constructor(){
        super();
        this.state ={
            compState: "Czekaj",
            pageTitle: "Twoje platnosci",
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
        var url = await "http://localhost:9090/pays/get/" + sessionStorage.getItem('basketID');

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
                    <h1>{this.state.pageTitle}</h1>
                    <p>{this.state.compState}</p>
                </div>
            );
        }else{
            let counter = 0;
            this.state.fetchedPays.forEach((el) =>{
                counter++;
                pays.push(
                    <Row>
                        <Col sm={6} md={2} lg={8}>
                            <h3>{counter} - Platnosc</h3>
                            <h4>{el.id}</h4>
                            <p> Cost - {el.total}</p><br/>
                        </Col>
                    </Row>
                )
            });
            return(
                <div>
                    <h1>{this.state.pageTitle}</h1>
                    <Grid>{pays}</Grid>
                </div>
            );
        }
    }
}


export default Pays;
