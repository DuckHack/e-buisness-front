import React, {Component} from 'react'
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import './EditProductType.css'


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
            method: 'DELETE',
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
                <div className={'productTypeFormsBox'}>
                    <form onSubmit={this.handleSubmitAdd}>
                        <FieldGroup
                            value={this.state.name}
                            onChange={this.handleChange}
                            name="name"
                            id="formControlsText"
                            type="text"
                            label="Wprowadz nazwe typu"
                            placeholder="Nazwa"
                        />
			<Button type="submit">Add</Button>
                    </form>
                    <form onSubmit={this.handleSubmitDel}>
                        <FormGroup
                            controlId="formControlsSelect">
                            <ControlLabel>Wybierz typ</ControlLabel>
                            <FormControl name="id" componentClass="select" placeholder="select">
                                {types}
                            </FormControl>
                        </FormGroup>
                        <Button type="submit">Delete</Button>
                    </form>
                </div>
            </div>
        );
    }
}


function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}


export default AddProductType;


{/*
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
    </form>*/}
