import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap'
import EditBasket from '../AdminForms/EditBasket/EditBasket'
import EditKeyword from '../AdminForms/EditKeyword/EditKeyword'
import EditOpinion from '../AdminForms/EditOpinion/EditOpinion'
import EditOrders from '../AdminForms/EditOrders/EditOrders'
import EditPays from '../AdminForms/EditPays/EditPays'
import EditProductForm from '../AdminForms/EditProductForm/EditProductForm'
import EditProductType from '../AdminForms/EditProductType/EditProductType'

class AdminPage extends Component{
    render(){
        return(
            <div className={'userPageBox'}>
                <h1>
                    Strona admina
                </h1>
                <Tabs defaultActiveKey={1} id="uncontrolled-tab">
                    <Tab eventKey={1} title="Edytuj koszyki">
                        <EditBasket/>
                    </Tab>
                    <Tab eventKey={2} title="Edytuj slowa kluczowe">
                        <EditKeyword/>
                    </Tab>
                    <Tab eventKey={3} title="Edytuj opinie">
                        <EditOpinion/>
                    </Tab>
                    <Tab eventKey={4} title="Edytuj zamowienia">
                        <EditOrders/>
                    </Tab>
                    <Tab eventKey={5} title="Edytuj platnosci">
                        <EditPays/>
                    </Tab>
                    <Tab eventKey={6} title="Edytuj produkty">
                        <EditProductForm/>
                    </Tab>
                    <Tab eventKey={7} title="Edytuj typy productow">
                        <EditProductType/>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}


export default AdminPage;
