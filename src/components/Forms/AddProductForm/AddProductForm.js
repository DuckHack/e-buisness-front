import React,{Component} from 'react';

class AddProductForm extends Component{
    constructor(props){
        super(props);
        this.state = {
                name: '',
                description: '',
                type_id: '',
                price: '',
                productTypes: []
        };
        this.handleSubmitAction = this.handleSubmitAction.bind(this);
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
    }


    handleSubmitAction(e){
        e.preventDefault();
        const data = new FormData(e.target);

        fetch("http://localhost:9090/products/addproduct", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'POST',
            body: data,
        });
        console.log('A product was submitted: ' + this.state.name + this.state.description + this.state.type_id + this.state.price);

    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    render(){
        let types = [];
        for (let i=0; i < this.state.productTypes.length; i++){
            let type = this.state.productTypes[i].id;
            types.push(<option value={this.state.productTypes[i].id} key={i}>{this.state.productTypes[i].name}</option>);
        }

        return(
            <div>
                <h1>Add product</h1>
                <form onSubmit={this.handleSubmitAction}>
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
            </div>
        );
    }
}

// <select name="type_id" id="type_id">
//     @for(p_type <- prod_type){
//     <option value="@p_type.id">@p_type.name</option>
// }
// </select>

export default AddProductForm;
