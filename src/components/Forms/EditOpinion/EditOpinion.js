import React, {Component} from 'react'



class EditOpinion extends Component{
    constructor(props){
        super(props);
        this.state = {
            opinionList: [],
        };
        this.handleSubmitDel = this.handleSubmitDel.bind(this);
    }


    componentWillMount(){
        fetch('http://localhost:9090/keyWords/getopinions ', {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'


        }).then(function(response) {return response.json();})
            .then((data) => {
                this.setState({opinionList: data});
            });
    }


    handleSubmitDel(e){
        e.preventDefault();
        const data = new FormData(e.target);
        fetch("http://localhost:9090/keyWords/delopinion", {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'DELETE',
            body: data,
        });
    }


    render(){
        let opinions = [];
        for (let i=0; i < this.state.opinionList.length; i++){
            opinions.push(<option value={this.state.opinionList[i].id} key={i}>{this.state.keywordList[i].value}</option>);
        }
        return(
            <div>
                <h1>
                    Edit opinions
                </h1>
                <form onSubmit={this.handleSubmitDel}>
                    <div>
                        <label>Del opinion</label>
                    </div>
                    <label>Chose the opinion and press submit
                        <select>
                            {opinions}
                        </select>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}


export default EditOpinion;
