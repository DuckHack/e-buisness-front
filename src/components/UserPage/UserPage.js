import React, {Component} from 'react';
import {BasketData} from "../Login/Login";
import {OAuth} from '../Login/Login'
import {Tabs, Tab} from 'react-bootstrap';
import Basket from '../UserPageComps/Basket/Basket'
import Pays from '../UserPageComps/Pays/Pays'
import Orders from '../UserPageComps/Orders/Orders'
import './UserPage.css'


class UserPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLogged: false,
        }
    }


/*
    componentDidMount() {
        if (BasketData.basket_data.length === 0 && sessionStorage.getItem('authData') !== undefined) {
            console.log("UserPage, authData -> " + sessionStorage.getItem('authData'));
            BasketData.get_basket(sessionStorage.getItem('authData'))
        }
    }
*/


    render(){
        return (
            <div className={'userPageBox'}>
                <h1>
                    Twoje konto
                </h1>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab">
                   <Tab eventKey={1} title="Koszyk">
                       <Basket/>
                   </Tab>
                   <Tab eventKey={2} title="Platnosci">
                        <Pays/>
                   </Tab>
                   <Tab eventKey={3} title="Zamowienia">
                        <Orders/>
                   </Tab>
                </Tabs>
            </div>
            );
    }
}


export default UserPage;