import React, {Component} from 'react';
import {BasketData, OAuth} from "../Login/Login";
import {Button} from 'react-bootstrap'


class AddToBasket extends Component{
    constructor(){
        super();
        this.loggedEl = this.loggedEl.bind(this);
        this.unLoggedEl = this.unLoggedEl.bind(this);
        this.addToBasket = this.addToBasket.bind(this);
        this.state = {
            logged: false,
        }
    }


    componentWillMount() {
        if (OAuth.isAuthenticated) {
            this.setState({logged: true});
            if (BasketData.basket_data.length === 0) {
                BasketData.get_basket(OAuth.authenticatedData.uuid)
            }
        }else{
            this.setState({logged: false});
        }
    }


    loggedEl(){
        return(
            <Button bsStyle="primary" onClick={this.addToBasket.bind(this, this.props.product_id)}>Add to basket</Button>
            );
    }


    unLoggedEl(){
        return(
            <Button bsStyle="primary">
                Must be logged
            </Button>
        );
    }


    addToBasket(prodID){
        console.log("addToBasket inside");
        const basketID = BasketData.basket_data.id;
        fetch(`http://localhost:9090/basketproducts/add/${prodID}/${basketID}`, {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'POST',
            mode: 'cors'
        });
    }

    render(){
        let returnedElement;
        returnedElement = (this.state.logged) ? this.loggedEl() : this.unLoggedEl();
        return(
            returnedElement
        );
    }
}


export default AddToBasket;
