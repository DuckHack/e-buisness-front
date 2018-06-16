import React, {Component} from 'react';

class Orders extends Component{
    constructor(){
        super();
        this.state ={
            compState: "Loading",
            fetchedOrders: [],
        };
    }

//TODO change fetching var from userID to basket_id
    componentWillMount(){
        let userID = sessionStorage.getItem("userID");
       // let basketID = sessionStorage.getItem("basketID");
        fetch(`http://localhost:9090/orders/getorders/${userID}`,{
            headers: {'Access-Controll-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'
        }).then(function(response) {return response.json();})
            .then((data) => {
		    console.log(data);
                this.setState({fetchedOrders: data});
            });
    }


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
