import React, {Component} from 'react'


class AddBasket extends Component{
    constructor(props){
        super(props);
        this.state = {
            user_id: '',
            redirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

//     create table "basket"(
//     "id" integer primary key autoincrement,
//     "user_id" integer not null
// );

    handleSubmit(e){
        e.preventDefault();
        const data = new FormData(e.target);

        fetch("http://localhost:9090/baskets/addbasket", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'POST',
            body: data,
        });
        console.log('A name was submitted: ' + this.state.value);

    }


    handleChange(e) {
        this.setState({user_id: e.target.value});
    }


    render(){
        return(

            <div>
                <h1>
                    Add basket
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter userID
                        <input type='text' name='user_id' value={this.state.user_id} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default AddBasket;
