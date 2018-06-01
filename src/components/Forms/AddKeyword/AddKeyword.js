import React, {Component} from 'react'



class AddKeyword extends Component{
    constructor(props){
        super(props);
        this.state = {
            word: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
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


    handleChange(e) {
        this.setState({word: e.target.value});
    }


    render(){
        return(

            <div>
                <h1>
                    Add keyword
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter keyword
                        <input type='text' name='word' value={this.state.word} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}
// create table "product_type" (
//     "id" integer not null primary key autoincrement,
//     "name" varchar not null
// );

export default AddKeyword;
