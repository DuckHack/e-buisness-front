import React, {Component} from 'react'


class EditBasket extends Component{
    constructor(props){
        super(props);
        this.state = {
            basketsList: [],
            user_id: '',
            redirect: false
        };
        this.handleSubmitAdd = this.handleSubmitAdd.bind(this);
        this.handleSubmitDel = this.handleSubmitDel.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    componentWillMount(){
        fetch('http://localhost:9090/baskets/getbaskets ', {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'


        }).then(function(response) {return response.json();})
            .then((data) => {
                this.setState({basketsList: data});
            });
    }


    handleSubmitAdd(e){
        e.preventDefault();
        const data = new FormData(e.target);

        fetch("http://localhost:9090/baskets/addbasket", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'POST',
            body: data,
        });
        console.log('A name was submitted: ' + this.state.value);
    }


    handleSubmitDel(e){
        e.preventDefault();
        const data = new FormData(e.target);

        fetch("http://localhost:9090/baskets/delbasket", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'DELETE',
            body: data,
        });
        console.log('A name was submitted: ' + this.state.value);
    }


    handleChange(e) {
        this.setState({user_id: e.target.value});
    }


    render(){
        let baskets = [];
        for (let i=0; i < this.state.basketsList.length; i++){
            baskets.push(<option value={this.state.basketsList[i].id} key={i}>{this.state.basketsList[i].user_id}</option>);
        }
        return(
            <div>
                <h1>
                    Edit baskets
                </h1>
                <form onSubmit={this.handleSubmitAdd}>
                    <div>
                        <label>Add basket</label>
                    </div>
                    <label>Enter userID
                        <input type='text' name='user_id' value={this.state.user_id} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <form onSubmit={this.handleSubmitDel}>
                    <div>
                        <label>Del basket</label>
                    </div>
                    <label>Chose the basket
                        <select>
                            {baskets}
                        </select>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}


export default EditBasket;
