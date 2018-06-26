import React, {Component} from 'react'
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';
import './EditKeyword.css'

class EditKeyword extends Component{
    constructor(props){
        super(props);
        this.state = {
            word: '',
            keywordList: [],
        };
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.handleSubmitDel = this.handleSubmitDel.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    componentWillMount(){
        fetch('http://localhost:9090/keyWords/getkeywords ', {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'


        }).then(function(response) {return response.json();})
            .then((data) => {
                this.setState({keywordList: data});
            });
    }


    handleSubmitAdd(e){
        e.preventDefault();
        const data = new FormData(e.target);
        fetch("http://localhost:9090/keyWords/addkeyword", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'POST',
            body: data,
        });
    }


    handleSubmitDel(e){
        e.preventDefault();
        const data = new FormData(e.target);
        fetch("http://localhost:9090/keyWords/delkeyword", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'DELETE',
            body: data,
        });
    }


    handleChange(e) {
        this.setState({word: e.target.value});
    }


    render(){
        let keyWords = [];
        for (let i=0; i < this.state.keywordList.length; i++){
            keyWords.push(<option value={this.state.keywordList[i].id} key={i}>{this.state.keywordList[i].word}</option>);
        }
        return(
            <div>
                <h1>
                    Edit keywords
                </h1>
                <div className={'keywordFormsBox'}>
                    <form onSubmit={this.handleSubmitAdd}>
                        <FieldGroup
                            value={this.state.word}
                            onChange={this.handleChange}
                            name="word"
                            id="formControlsText"
                            type="text"
                            label="Wprowadz slowo kluczowe"
                            placeholder="#KEYWORD"
                        />
                        <Button type="submit">Add</Button>
                    </form>
                    <form onSubmit={this.handleSubmitDel}>
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Usunac slowo kluczowe</ControlLabel>
                            <FormControl name="id" componentClass="select" placeholder="select">
                                {keyWords}
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


export default EditKeyword;


{/*<form onSubmit={this.handleSubmitAdd}>
                    <div>
                        <label>Add keyword</label>
                    </div>
                    <label>Enter keyword
                        <input type='text' name='word' value={this.state.word} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <form onSubmit={this.handleSubmitDel}>
                    <div>
                        <label>Del keyword</label>
                    </div>
                    <label>Chose the keyword and press submit
                        <select>
                            {keyWords}
                        </select>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>*/}
