import React, {Component} from 'react'
import { Redirect } from 'react-router'


class AddProductType extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const data = new FormData(e.target);

        fetch("http://localhost:9090/types/addtype", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'POST',
            body: data,
        });
         console.log('A name was submitted: ' + this.state.name);
    }


    handleChange(e) {
        this.setState({name: e.target.value});
    }


    render(){
        return(

            <div>
                <h1>
                    Add product type
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter product type name
                        <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/>
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

export default AddProductType;
