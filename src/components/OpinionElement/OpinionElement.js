import React, {Component} from 'react';


class OpinionElement extends Component{
    constructor(props){
        super(props);
        this.handleOpinionChange = this.handleOpinionChange.bind(this);
        this.handleOpinionSubmit = this.handleOpinionSubmit.bind(this);
        this.state = {
            opinionsList: [],
            value: '',
            product_id: '',
	    submitStatus:'',
        };
    }


    componentWillMount() {
        fetch('http://localhost:9090/opinions/getopinions', {
            headers: {'Access-Control-Allow-Origin': '*'},
            method: 'GET',
            mode: 'cors'


        }).then(function(response) {return response.json();})
            .then((data) => {
                this.setState({opinionsList: data});
            });
    }


    handleOpinionChange(e){
	    this.setState({value: e.target.value});
    }


    handleOpinionSubmit(e){
        e.preventDefault();
        const data = new FormData(e.target);
	fetch("http://localhost:9090/opinions/addopinion",{
		headers: {'Access-Control-Allow-Origin': '*'},
		method: 'POST',
		body: data,
    	});
	    this.setState({submitStatus: 'Submitted',
			value: ''
	    });
    }


    render(){
        let opinions = [];
	    opinions.push(<li key={0}>Opinions</li>);
        this.state.opinionsList.forEach((el)=>{
            if(+el.product_id === +this.props.product_id){
                opinions.push(<li key={el.value}>{el.value}</li>);
            }
        });
	    opinions.push(
	    	<div>
                <form onSubmit={this.handleOpinionSubmit}>
                    <input type='text' name='value' value={this.state.value} onChange={this.handleOpinionChange}/>
		    <input type='hidden' name='product_id' value={this.props.product_id}/>
                    <input type='submit' value='Submit'/>
		    <p>{this.state.submitStatus}</p>
                </form>
		    </div>
	    );
        return(
            <div>
                <ul>
                    {opinions}
                </ul>
            </div>
        );
    }
}


export default OpinionElement;
