import React, {Component} from 'react';
import OpinionElement from '../OpinionElement/OpinionElement';
import AddToBasket from '../AddToBasket/AddToBasket';
import {Grid, Col, Thumbnail, Row} from 'react-bootstrap';


class ProductElement extends Component{
    constructor(props){
        super(props);
        this.state = {
            productsList: [],
            productsByType: [],
            productTypes: [],
		lastType: 0,
        };
	this.createTypedList = this.createTypedList.bind(this);
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
    }


    createTypedList(){
        console.log("Comp did mount");
	    let data =[];
        if(this.props.type === 0){
            return;
        }else{
            for(let i=0; i< this.state.productsList.length;i++){
                let prod = this.state.productsList[i];
                if(+prod.type_id === this.props.type){
                    data.push(prod);
                }else{
                    continue;
                }
            }
        }
        this.setState({productsByType: data});
	this.setState({lastType: this.props.type});
    }



    render(){
	console.log("Product Element, type -> " + this.props.type);
	if(this.props.type !== this.state.lastType){
		this.createTypedList();
	 }
        let cols = [];
        let rows = [];
        let oneRowData = [];
        let curProductList = [];
        //create typed/untyped product list
        if(this.props.type === 0){
            curProductList = this.state.productsList.slice(0,);
        }else{
            curProductList = this.state.productsByType.slice(0,);
        }
//TODO solve problem with opinion element
        for (let i = 0; i < curProductList.length; i++) {
            cols.push(
                <Col sm={6} md={3} lg={4}>
                    <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                        <h3>{curProductList[i].name}</h3>
                        <p>{curProductList[i].description}</p>
                        <p>
                            <AddToBasket product_id={curProductList[i].id}/>
                        </p>
                    </Thumbnail>
                </Col>
            );
        }

        for(let i=0; i < (cols.length/3)+1; i++){
            if(i !== (cols/3)){
             oneRowData.push(cols.slice(3*i, 3*i+3))
            }else{
                oneRowData.push(cols.slice(3*i,))
            }
        }

        oneRowData.forEach((e)=>{
            rows.push(<Row>{e}</Row>)
        });
        return(
            <div>
                <Grid>
                    {rows}
                </Grid>
            </div>
        );
    }
}


export default ProductElement;
