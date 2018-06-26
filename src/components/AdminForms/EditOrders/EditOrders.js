import React, {Component} from 'react'
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import './EditOrders.css'

class EditOrders extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            fetchedOrders: [],
        };
        this.handleSubmitDel = this.handleSubmitDel.bind(this);
    }


    componentWillMount() {
        fetch('http://localhost:9090/orders/getorders', {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'

        }).then(function(response) {return response.json();})
            .then((data) => {
                this.setState({fetchedOrders: data});
            });
    }


    handleSubmitDel(e){
        e.preventDefault();
        const data = new FormData(e.target);
        fetch("http://localhost:9090/orders/delorder", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'DELETE',
            body: data,
        });
    }


    render(){
        let orders = [];
        for (let i=0; i < this.state.fetchedOrders.length; i++){
            orders.push(<option value={this.state.fetchedOrders[i].id} key={i}>{this.state.fetchedOrders[i].id}</option>);
        }
        return(
            <div>
                <h1>
                    Edit orders
                </h1>
                <div className={'orderFormsBox'}>
                    <form onSubmit={this.handleSubmitDel}>
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Usunac zamowenie</ControlLabel>
                            <FormControl name="id" componentClass="select" placeholder="select">
                                {orders}
                            </FormControl>
                        </FormGroup>
                        <Button type="submit">Delete</Button>
                    </form>
                </div>
            </div>
        );
    }
}


export default EditOrders;


{/*
<form onSubmit={this.handleSubmitDel}>
    <div>
        <label>Del Order</label>
    </div>
    <label>Chose the Order and press submit
        <select>
            {orders}
        </select>
    </label>
    <input type="submit" value="Submit"/>
</form>*/}
