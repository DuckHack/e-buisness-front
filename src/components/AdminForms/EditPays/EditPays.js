import React, {Component} from 'react'
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import './EditPays.css'

class EditPays extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            fetchedPays: [],
        };
        this.handleSubmitDel = this.handleSubmitDel.bind(this);
    }


    componentWillMount() {
        fetch('http://localhost:9090/pays/getpays', {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'
        }).then(function(response) {return response.json();})
            .then((data) => {
                this.setState({fetchedPays: data});
            });
    }


    handleSubmitDel(e){
        console.log(e);
        e.preventDefault();
        const data = new FormData(e.target);
        fetch("http://localhost:9090/pays/delpay", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'DELETE',
            body: data,
        });
    }


    render(){
        let pays = [];
        for (let i=0; i < this.state.fetchedPays.length; i++){
            pays.push(<option value={this.state.fetchedPays[i].id} key={i}>{this.state.fetchedPays[i].id}</option>);
        }
        return(
            <div>
                <h1>
                    Edit pays
                </h1>
                <div className={'paysFormsBox'}>
                    <form onSubmit={this.handleSubmitDel}>
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Usunac platnosci</ControlLabel>
                            <FormControl name='id' componentClass="select" placeholder="select">
                                {pays}
                            </FormControl>
                        </FormGroup>
                        <Button type="submit">Delete</Button>
                    </form>
                </div>
            </div>
        );
    }
}


export default EditPays;


{/*
<form onSubmit={this.handleSubmitDel}>
    <div>
        <label>Del Pays</label>
    </div>
    <label>Chose the pay and press submit
        <select>
            {pays}
        </select>
    </label>
    <input type="submit" value="Submit"/>
</form>*/}
