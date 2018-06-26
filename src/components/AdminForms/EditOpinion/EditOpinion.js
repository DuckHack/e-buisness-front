import React, {Component} from 'react'
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import './EditOpinion.css'

class EditOpinion extends Component{
    constructor(props){
        super(props);
        this.state = {
            opinionList: [],
        };
        this.handleSubmitDel = this.handleSubmitDel.bind(this);
    }


    componentDidMount() {
        fetch('http://localhost:9090/opinions/getopinions', {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'
        }).then(function(response) {return response.json();})
            .then((data) => {
                this.setState({opinionList: data});
            });
    }

    handleSubmitDel(e){
        e.preventDefault();
        const data = new FormData(e.target);
        fetch("http://localhost:9090/opinions/delopinion", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'DELETE',
            body: data,
        });
    }


    render(){
        let opinions = [];
        for (let i=0; i < this.state.opinionList.length; i++){
            opinions.push(<option value={this.state.opinionList[i].id} key={i}>{this.state.opinionList[i].value}</option>);
        }
        return(
            <div className={'opinionFormsBox'}>
                <h1>
                    Edit opinions
                </h1>
                <form onSubmit={this.handleSubmitDel}>
                    <FormGroup controlId="formControlsSelect">
                        <ControlLabel>Usunac opinie</ControlLabel>
                        <FormControl name="id" componentClass="select" placeholder="select">
                            {opinions}
                        </FormControl>
                    </FormGroup>
                    <Button type="submit">Delete</Button>
                </form>
            </div>
        );
    }
}


export default EditOpinion;


{/*
<form onSubmit={this.handleSubmitDel}>
    <div>
        <label>Del opinion</label>
    </div>
    <label>Chose the opinion and press submit
        <select>
            {opinions}
        </select>
    </label>
    <input type="submit" value="Submit"/>
</form>*/}
