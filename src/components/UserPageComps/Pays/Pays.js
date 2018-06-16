import React, {Component} from 'react';

class Pays extends Component{
    constructor(){
        super();
        this.state ={
            compState: "Loading",
            fetchedPays: [],
        };
    }


    componentWillMount(){
	let userID = sessionStorage.getItem('userID');
        //let basketID = sessionStorage.getItem("basketID");
        fetch(`http://localhost:9090/pays/get/${userID}`,{
            headers: {'Access-Controll-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'
        }).then(function(response) {return response.json();})
            .then((data) => {
                this.setState({fetchedPays: data});
            });
    }


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
