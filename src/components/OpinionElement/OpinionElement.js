import React, {Component} from 'react';


class OpinionElement extends Component{
    constructor(props){
        super(props);
        //this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleOpinionSubmit = this.handleOpinionSubmit.bind(this);
        this.state = {
            opinionsList: [
                {
                    id: 1,
                    value: 'Tak sebe avto',
                    product_id: 1
                },
                {
                    id: 2,
                    value: 'Tak sebe avto2',
                    product_id: 1
                }
            ],
            value: '',
            product_id: ''
        };
    }
//     create table "opinion" (
    //         "id" integer primary key autoincrement,
    //         "value" varchar,
    //         "product_id" integer not null,
    //         foreign key("product_id") references product(id)
    // );

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
    handleSelectChange(e){

    }

    handleOpinionSubmit(e){
        console.log('OpinionSubmit')
    }

    render(){
        let opinions = [];
	    opinions.push(<li>Opinions</li>)
        this.state.opinionsList.forEach((el)=>{
            if(+el.product_id === +this.props.product_id){
                opinions.push(<li>{el.value}</li>);
            }
        });
	    opinions.push(
	    	<div>
		    <form onSubmit={this.handleOpinionSubmit}>
		    <input type='text' value=''/>
		    <input type='submit' value='Submit'/>
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
