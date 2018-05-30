import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            redirect: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //var inputAlert;
    }

    handleSubmit(){
//        const userId = this.state.value.toString();
        alert('A name was submitted: ' + this.state.value);
//        if(userId === '1'){
//            this.state.redirect = true;
//        }else{
//            alert('Wrong user');
//        }
    }


    handleChange(event) {
        const inputState = event.target.value;
        this.setState({value: event.target.value});
        (inputState !== '1')? this.inputAlert = 'Wrong input': this.inputAlert='';
        if(inputState === '') this.inputAlert = '';
    }


    render(){
        const { redirect } = this.state;
        // if (redirect) {
        //  return <Redirect to='/somewhere'/>;
        // }
        return(

            <div>
                <h1>
                    Login page
                </h1>
                <form onSubmit={this.handleSubmit}>
                <label>Enter your id
                    <input type='text' value={this.state.value} onChange={this.handleChange}/>
                </label>
                    <input type="submit" value="Submit"/>
                    <p>{this.inputAlert}</p>
                </form>
                <Link to={`/adminpage`}>Admin page</Link>
            </div>
        );
    }
}


export default Login;