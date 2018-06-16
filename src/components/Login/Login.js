import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            logIn: '',
            signIn: '',
		basket: [],
            loadingMessage: "",
            isFetchFail: 2,
        };
        this.handleSubmitLogIn = this.handleSubmitLogIn.bind(this);
        this.handleSubmitSignIn = this.handleSubmitSignIn.bind(this);
        this.handleChangeLog = this.handleChangeLog.bind(this);
        this.handleChangeSig = this.handleChangeSig.bind(this);
        this.getBasketId = this.getBasketId.bind(this);
    }

    //TODO make user validation
    handleSubmitLogIn(){
       const userID = this.state.logIn.toString();
	sessionStorage.setItem('userID', userID);
       let basket;
        if(userID) {
            console.log(userID + " RESPONSE");

            fetch(`http://localhost:9090/baskets/get/${userID}`, {
               headers: {'Access-Control-Allow-Origin': '*'},
               method: 'GET',
               mode: 'cors'
           }).then(function (response) {
               console.log(response.json() + " RESPONSE");
               return response.json();
           }).then((data) => {
                   basket = data;
                   sessionStorage.setItem('basketID', basket);
               });
       }else{
           alert("Wrong input")
       }
    }

    //TODO create new basket for new user
    handleSubmitSignIn(){

    }


    getBasketId(userID){
	fetch(`http://localhost:9090/baskets/get/${userID}`, {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'


        }).then(function(response) {return response.json();})
            .then((data) => {
                console.log(data + " DATA");
                this.setState({basket: data});
                sessionStorage.setItem('basketID', data);
            }); 
    }


    handleChangeLog(event) {
        this.setState({logIn: event.target.value});
    }

    //TODO check if this id already in DB
    handleChangeSig(event) {
        this.setState({signIn: event.target.value});
    }


    render(){
        let loadingMessage = "";
        let locState;
        if(this.state.isFetchFail === 1){
            loadingMessage = "Can't connect with server, try later";
        }else if(this.state.isFetchFail === 0){
            loadingMessage = "You logged";
        }
	    locState = (this.state.basket[0] === undefined)?"Loading":this.state.basket[0].id;


        return(
            <div>
                <h1>Login in</h1>
                <form onSubmit={this.handleSubmitLogIn}>
                <label>Enter your id
                    <input type='text' value={this.state.logIn} onChange={this.handleChangeLog}/>
                </label>
                    <input type="submit" value="Submit"/>
                </form>
                <h1>Sign in</h1>
                <form onSubmit={this.handleSubmitSignIn}>
                    <label>Enter your id
                        <input type='text' value={this.state.signIn} onChange={this.handleChangeSig}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <br/>
                <p>{loadingMessage}</p>
		        <p>user + {sessionStorage.getItem("userID")}</p>
                <p>{locState}</p>
                <p>Login id {this.state.logIn}</p>
                <p>session  + {sessionStorage.getItem('basketID')}</p>
		<Link to={`/adminpage`}>Admin page</Link>
            </div>
        );
    }
}


export default Login;
