import React, {Component} from 'react'



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
	console.log(data);
        fetch("http://localhost:9090/keyWords/addkeyword", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'POST',
            body: data,
        });
         console.log('A word was submitted: ' + this.state.word);
    }


    handleSubmitDel(e){
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(data);
        fetch("http://localhost:9090/keyWords/delkeyword", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'DELETE',
            body: data,
        });
        console.log('A word was submitted: ' + this.state.word);
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
                <form onSubmit={this.handleSubmitAdd}>
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
                </form>
            </div>
        );
    }
}


export default EditKeyword;
