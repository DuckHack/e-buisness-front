import React, {Component} from 'react'


class AddProductType extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            productTypes: [],
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
    }


    handleSubmitAdd(e){
        e.preventDefault();
        const data = new FormData(e.target);

        fetch("http://localhost:9090/types/addtype", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'POST',
            body: data,
        });
    }


    handleSubmitDel(e){
        e.preventDefault();
        const data = new FormData(e.target);

        fetch("http://localhost:9090/types/deltype", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'POST',
            body: data,
        });
    }


    handleChange(e) {
        this.setState({name: e.target.value});
    }


    render(){
        let types = [];
        for (let i=0; i < this.state.productTypes.length; i++){
            types.push(<option value={this.state.productTypes[i].id} key={i}>{this.state.productTypes[i].name}</option>);
        }
        return(

            <div>
                <h1>
                    Edit product type
                </h1>
                <form onSubmit={this.handleSubmitAdd}>
                    <label>Enter product type name
                        <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <form onSubmit={this.handleSubmitDel}>
                    <div>
                        <label>Del Types</label>
                    </div>
                    <label>Chose the type and press submit
                        <select>
                            {types}
                        </select>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}


export default AddProductType;
