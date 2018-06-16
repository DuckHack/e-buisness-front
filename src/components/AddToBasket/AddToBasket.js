import React, {Component} from 'react';

class AddToBasket extends Component{
    constructor(){
        super();
        this.loggedEl = this.loggedEl.bind(this);
        this.unLoggedEl = this.unLoggedEl.bind(this);
        this.state = {
            logged: false,
        }
    }


    componentWillMount(){
        if(sessionStorage.getItem("userID") === '1'){
            this.setState({logged: true});
        }else{
            this.setState({logged: false});
        }
    }


    loggedEl(){
        return(
            <button>
                Add to basket
            </button>
        );
    }


    unLoggedEl(){
        return(
            <button>
                Log in for use bakset
            </button>
        );
    }


    render(){
        let returnedElement;
        returnedElement = (this.state.logged) ? this.loggedEl() : this.unLoggedEl();
        return(
            returnedElement
        );
    }
}


export default AddToBasket;
