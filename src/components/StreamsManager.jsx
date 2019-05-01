import React from 'react';
import { Row, Col, Card, Switch } from 'antd';
import BreadcrumbCustom from './BreadcrumbCustom';
import StreamsTable from './tables/StreamsTable';
import { SRSAPI } from '../axios/api'

class StreamsManager extends React.Component {
    state = {
        streams: []
    };

    updateStreams = () => {
        SRSAPI.get('streams/')
            .then(respone => {
                this.setState({
                    streams: respone.data.streams
                })
            })
    }

    componentWillMount() {
        this.updateStreams()
        this.interval = setInterval(
            () => {
                this.updateStreams()
            }
            , 2000)
    }

    componentWillUnmount() {
        this.interval && clearInterval(this.interval)
    }

    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom second="直播流管理" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="在线直播流" bordered={false}>
                                <StreamsTable streams={this.state.streams} />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={14}>

                </Row>
            </div>
        )
    }
}

export default StreamsManager;