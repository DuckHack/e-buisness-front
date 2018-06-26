import React, {Component} from 'react';
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import './EditBasket.css'
class EditBasket extends Component{
    constructor(props){
        super(props);
        this.state = {
            basketsList: [],
            user_id: '',
            redirect: false
        };
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.handleSubmitDel = this.handleSubmitDel.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    componentWillMount(){
        fetch('http://localhost:9090/baskets/getbaskets ', {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'
        }).then(function(response) {return response.json();})
            .then((data) => {
                this.setState({basketsList: data});
            });
    }


    handleSubmitAdd(e){
        e.preventDefault();
        const data = new FormData(e.target);
        fetch("http://localhost:9090/baskets/addbasket", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'POST',
            body: data,
        });
        console.log('A name was submitted: ' + this.state.value);
    }


    handleSubmitDel(e){
        e.preventDefault();
        const data = new FormData(e.target);
	console.log("Del method");
        fetch("http://localhost:9090/baskets/deletebasket", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'DELETE',
            body: data,
        });
        console.log('A name was submitted: ' + this.state.value);
    }


    handleChange(e) {
        this.setState({user_id: e.target.value});
    }


    render(){
        let baskets = [];
        for (let i=0; i < this.state.basketsList.length; i++){
            baskets.push(<option value={this.state.basketsList[i].id} key={i}>{this.state.basketsList[i].user_id}</option>);
        }
        console.log(baskets)
        return(
            <div>
                <h1>
                    Edit baskets
                </h1>
                <div className={'basketFormsBox'}>
                    <form onSubmit={this.handleSubmitAdd}>
                        <FieldGroup
                            value={this.state.user_id}
                            onChange={this.handleChange}
                            name="user_id"
                            id="formControlsText"
                            type="text"
                            label="Wprowadz userID"
                            placeholder="user ID"
                        />
                        <Button type="submit">Add</Button>
                    </form>
                    <form onSubmit={this.handleSubmitDel}>
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Select</ControlLabel>
                            <FormControl name="id" componentClass="select" placeholder="select">
                                {baskets}
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


export default EditBasket;



{/*
<div>
    <h1>
        Edit baskets
    </h1>
    <form onSubmit={this.handleSubmitAdd}>
        <div>
            <label>Add basket</label>
        </div>
        <label>Enter userID
            <input type='text' name='user_id' value={this.state.user_id} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
    </form>

    <form onSubmit={this.handleSubmitDel}>
        <div>
            <label>Del basket</label>
        </div>
        <label>Chose the basket
            <select>
                {baskets}
            </select>
        </label>
        <input type="submit" value="Submit"/>
    </form>
</div>
*/}
