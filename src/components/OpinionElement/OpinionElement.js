import React, {Component} from 'react';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'

class OpinionElement extends Component{
    constructor(props){
        super(props);
        this.handleOpinionChange = this.handleOpinionChange.bind(this);
        this.handleOpinionSubmit = this.handleOpinionSubmit.bind(this);
        this.state = {
            opinionsList: [],
            value: '',
            product_id: '',
	    submitStatus:'',
        };
    }


    componentWillMount() {
        fetch('http://localhost:9090/opinions/getopinions', {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'
        }).then(function(response) {return response.json();})
            .then((data) => {
                this.setState({opinionsList: data});
            });
    }


    handleOpinionChange(e){
	    this.setState({value: e.target.value});
    }


    handleOpinionSubmit(e){
        e.preventDefault();
        const data = new FormData(e.target);
        console.log("DATA -> " + data.value);
	fetch("http://localhost:9090/opinions/addopinion",{
		headers: {'Access-Control-Allow-Origin': '*'},
		method: 'POST',
		body: data,
    	});
	    this.setState({submitStatus: 'Submitted',
			value: ''
	    });
    }


    render(){
        let opinions = [];
	    opinions.push(<h3 key={0}>Opinions</h3>);
        this.state.opinionsList.forEach((el)=>{
            if(+el.product_id === +this.props.product_id){
                opinions.push(<div key={el.value}>
                    <pre>{el.value}</pre>
                    </div>);
            }
        });
	    opinions.push(
            <div>
                <form onSubmit={this.handleOpinionSubmit}>
                    <FormGroup
                        type='text'
                        name='value'
                        value={this.state.value}
                        onChange={this.handleOpinionChange}
                        controlId="formControlsTextarea">
                        <FormControl name='value' componentClass="textarea" placeholder="Wpisz swoje opinie" />
                    </FormGroup>
                    <input type='hidden' name='product_id' value={this.props.product_id}/>
                    <Button type="submit">Wysli</Button>
                </form>
            </div>
        );
        return(
            <div>
                {opinions}
            </div>
        );
    }
}


export default OpinionElement;

{/*
<div>
    <form onSubmit={this.handleOpinionSubmit}>
        <input type='text' name='value' value={this.state.value} onChange={this.handleOpinionChange}/>
        <input type='hidden' name='product_id' value={this.props.product_id}/>
        <input type='submit' value='Submit'/>
        <p>{this.state.submitStatus}</p>
    </form>
</div>*/}
