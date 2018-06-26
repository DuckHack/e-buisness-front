import React, {Component} from 'react';
import ProductElement from '../ProductElement/ProductElement'
import {DropdownButton, MenuItem} from 'react-bootstrap';
import './ProductsList.css';



class ProductsList extends Component{
    constructor(props){
        super(props);
        this.checkUser = this.checkUser.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.state = {
            productTypes: [],
            type: 0,
            header: HEADERS[0],
        };
    }


    componentWillMount(){
        fetch('http://localhost:9090/types/gettypes', {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'


        }).then(function(response) {return response.json();})
            .then((data) => {
                this.setState({productTypes: data});
            });
    }


    checkUser(){
        if(sessionStorage.getItem("userID") === '1'){
            console.log("We are logged!" + sessionStorage.getItem('userID'));
        }else{
            console.log("We are unlogged")
        }
    }


    handleSelectChange(e){
        let typeID = +e;
        this.setState({type: typeID});
        this.setState({header: HEADERS[typeID]})
    }


    render(){
        let types = [];
        this.checkUser();
        types.push(<MenuItem onClick={this.handleSelectChange.bind(this, 0)} eventKey={0}>WSZYSTKIE</MenuItem>);
        for (let i=0; i < this.state.productTypes.length; i++){
            types.push(<MenuItem onClick={this.handleSelectChange.bind(this, this.state.productTypes[i].id)} eventKey={this.state.productTypes[i].id}>{this.state.productTypes[i].name}</MenuItem>);
            // types.push(<option value={this.state.productTypes[i].id} key={i}>{this.state.productTypes[i].name}</option>);
        }
        return(
            <div className={'productsListBox'}>
                <h1>{this.state.header}</h1>
                <div>
                    <div className={'dropDownBox'}>
                        <DropdownButton
                            bsStyle={"primary"}
                            title={"WYBIERZ STYL"}
                            id={1}
                        >
                            {types}
                        </DropdownButton>
                    </div>
                    <ProductElement type={this.state.type}/>
                </div>
            </div>
        );
    }
}

const HEADERS = [
    "ZOBACZ WSZYSTKIE",
    "NAJBARDZIEJ LEGENDARNE OKULARY PRZECIWSŁONECZNE",
    "REKOMENDOWANY STYL OKULARÓW KOREKCYJNYCH"
];

export default ProductsList;
