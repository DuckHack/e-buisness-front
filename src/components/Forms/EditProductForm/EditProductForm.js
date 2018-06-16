import React,{Component} from 'react';

class AddProductForm extends Component{
    constructor(props){
        super(props);
        this.state = {
                name: '',
                description: '',
                type_id: '',
                price: '',
                productTypes: [],
                productList: [],
        };
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.handleSubmitDel = this.handleSubmitDel.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    componentWillMount() {
        fetch('http://localhost:9090/types/gettypes', {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'


        }).then(function(response) {return response.json();})
            .then((data) => {
                this.setState({productTypes: data});
            });

        fetch('http://localhost:9090/products/getproducts', {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'


        }).then(function(response) {return response.json();})
            .then((data) => {
                this.setState({productList: data});
            });
    }


    handleSubmitAdd(e){
        e.preventDefault();
        const data = new FormData(e.target);

        fetch("http://localhost:9090/products/addproduct", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'POST',
            body: data,
        });
        console.log('A product was submitted: ' + this.state.name + this.state.description + this.state.type_id + this.state.price);

    }


    handleSubmitDel(e){
	console.log("trying to delete");
        e.preventDefault();
        const data = new FormData(e.target);

        fetch("http://localhost:9090/products/delproduct", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'DELETE',
            body: data,
        });
    }


    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    render(){
        let types = [];
        for (let i=0; i < this.state.productTypes.length; i++){
            types.push(<option value={this.state.productTypes[i].id} key={i}>{this.state.productTypes[i].name}</option>);
        }

        let products = [];
        for (let i=0; i < this.state.productList.length; i++){
            products.push(<option value={this.state.productList[i].id} key={i}>{this.state.productList[i].name}</option>);
        }
        return(
            <div>
                <h1>Edit products</h1>
                <div>
                    <label>Add product</label>
                </div>
                <form onSubmit={this.handleSubmitAdd}>
                    <label >
                        Name
                        <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                    </label><br/>
                        <label >
                        Description
                        <input type='text' name='description' value={this.state.description} onChange={this.handleChange}/>
                    </label><br/>
                        <label >
                        Price
                        <input type='text' name='price' value={this.state.price} onChange={this.handleChange}/>
                    </label><br/>
                    <select name='type_id'>
                        {types}
                    </select>
                        <input type='submit' value='Submit'/>
                </form>
                <form onSubmit={this.handleSubmitDel}>
                    <div>
                        <label>Del Product</label>
                    </div>
                    <label>Chose the product and press submit
                        <select name='id'>
                            {products}
                        </select>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}


export default AddProductForm;
