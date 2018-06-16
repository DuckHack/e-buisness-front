import React, {Component} from 'react';
import OpinionElement from '../OpinionElement/OpinionElement'
import AddToBasket from '../AddToBasket/AddToBasket'

class ProductElement extends Component{
    constructor(props){
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.state = {
            productsList: [],
            productsByType: [],
            productTypes: [],
            typed: false
        };
    }


    componentWillMount() {
        fetch('http://localhost:9090/products/getproducts', {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'


        }).then(function(response) {return response.json();})
            .then((data) => {
                this.setState({productsList: data});
            });

        fetch('http://localhost:9090/types/gettypes', {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'


        }).then(function(response) {return response.json();})
            .then((data) => {
                this.setState({productTypes: data});
            });
    }


    handleSelectChange(e){
        let type = +e.target.value;
        let data = [];
        if(type === 0){
            this.setState({typed: false});
        }else{
            this.setState({typed: true});
        }
        for(let i=0; i< this.state.productsList.length;i++){
            let prod = this.state.productsList[i];
            if(+prod.type_id === type){
                data.push(prod);
            }else{
                continue;
            }
        }
        this.setState({productsByType: data});
    }


    render(){
        let products = [];
        let types = [];
        let curProductList = [];
        if(this.state.typed){
            curProductList = this.state.productsByType.slice(0,);
        }else{
            curProductList = this.state.productsList.slice(0,);
        }
        for (let i = 0; i < curProductList.length; i++) {
            //let id = curProductList[i].type_id;

            products.push(
                <li key={i} >
                    <AddToBasket/>
                    <div>
                        {curProductList[i].name}
                    </div>
                    <div>
                        {curProductList[i].description}
                    </div>
                    <div>
                        {curProductList[i].type_id}
                    </div>
                    <div>
                        {curProductList[i].price}
                    </div>
                        <OpinionElement product_id={curProductList[i].id}/>
                    <br/>
                </li>
            );
        }
        types.push(<option value={0}>All types</option>);
        for (let i=0; i < this.state.productTypes.length; i++){
            //let type = this.state.productTypes[i].id;
            types.push(<option value={this.state.productTypes[i].id} key={i}>{this.state.productTypes[i].name}</option>);
        }
        return(
            <div>
                <ul>
                    {products}
                </ul>
                <select onChange={this.handleSelectChange}>
                    {types}
                </select>
                <AddToBasket/>
            </div>
        );
    }
}


export default ProductElement;
