import React from 'react';
import { Row, Col, Card } from 'antd';
import ClientsTable from './ClientsTable';
import BreadcrumbCustom from '../BreadcrumbCustom';
import { SRSAPI } from '../../axios/api'

class ClientsManager extends React.Component {

    state = {
        clients: []
    }

    updateClients = () => {
        SRSAPI.get('clients/')
            .then(response => {
                let data = response.data.clients
                this.setState({
                    clients: data
                })
            })
    }

    componentWillMount() {
        this.updateClients()
        this.interval = setInterval(
            () => {
                this.updateClients()
            }, 2000)
    }

    componentWillUnmount() {
        this.interval && clearInterval(this.interval)
    }


    render() {

        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="在线客户端" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="在线用户" bordered={false}>
                                <ClientsTable data={this.state.clients} />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default ClientsManager;