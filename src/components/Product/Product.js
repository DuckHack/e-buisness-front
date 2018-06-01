import React, {Component} from 'react';

class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            product: {}
        };
    }


    componentWillMount() {
        fetch('http://localhost:9090/products/getproducts', {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'


        }).then(function (response) {
            return response.json();
        })
            .then((data) => {
                this.setState({productsList: data});
            });
    }

    render(){
        return(
            <h1>
                Product {this.props.match.params.id}
            </h1>
        );
    }
}

export default Product;