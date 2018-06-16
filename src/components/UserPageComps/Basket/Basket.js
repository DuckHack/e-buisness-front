import React, {Component} from 'react';

class Basket extends Component{
    constructor(){
        super();
        this.state ={
            compState: "Loading",
            fetchedBasketProducts: [],
        };
        this.delProduct = this.delProduct.bind(this);
    }


	componentWillMount(){
		let userID = sessionStorage.getItem("userID");
		console.log("userid " + userID);
       // let basketID = sessionStorage.getItem("userID");
		fetch(`http://localhost:9090/basketproducts/getbyid/${userID}`,{
			headers: {'Access-Controll-Allow-Origin': '*'},
			method: 'GET',
			mode: 'cors'
		}).then(function(response) {return response.json();})
			.then((data) => {
				console.log("DATA " + data);
				this.setState({fetchedBasketProducts: data});
			});
	}


    delProduct(id){
	    console.log("delProduct inside");
        fetch(`http://localhost:9090/basketproducts/delbasketprod/${id}`, {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'DELETE',
	mode: 'cors'
        });
    }


    render(){
		let tmpMountedProducts = [];
		//(!baskProd.length) must be
	    	console.log(this.state.fetchedBasketProducts.length);
		if(!this.state.fetchedBasketProducts.length){
			return(
				<div>
					<h1>
						Basket page
					</h1>
					<p>{this.state.compState}</p>
				</div>
			);
		}else{
			let counter = 0;
			this.state.fetchedBasketProducts.forEach((el) =>{
				counter++;
			    tmpMountedProducts.push(
				<li>
				    <ul>
					<li>{counter} - Product</li>
					<li>{el.id}</li>
				    	<li>{el.name}</li>
					<li>{el.price}</li>
					<li>{el.description}</li>
				    </ul>
					<br/>
                    <button onClick={this.delProduct.bind(this, el.id)}>Delete</button>
				</li>
			    );
			});
			return(
				<div>
					<h1>Basket page</h1>
                    <ul>
                        {tmpMountedProducts}
                    </ul>
				</div>
			);
		}
    }
}


export default Basket;
