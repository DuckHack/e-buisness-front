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
            addButtonTitle: 'Dodaj do koszyka'
        }
    }


    componentWillMount() {
        if (sessionStorage.getItem('isAuth')) {
            console.log("AddToBasket -> " + sessionStorage.getItem('authData') );
            console.log("isAuth -> " + sessionStorage.getItem('isAuth') );
            this.setState({logged: true});
/*
            if (BasketData.get_basket(sessionStorage.getItem('basketID')) === null) {
                BasketData.get_basket(sessionStorage.getItem('authData'))
            }
*/
        }else{
            this.setState({logged: false});
        }
    }


    loggedEl(){
        return(
            <Button bsStyle="primary" onClick={this.addToBasket.bind(this, this.props.product_id)}>{this.state.addButtonTitle}</Button>
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
        console.log("basketID -> " + sessionStorage.getItem('basketID'));
        const basketID = sessionStorage.getItem('basketID');
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
