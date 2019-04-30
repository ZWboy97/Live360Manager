import React from 'react';
import { Row, Col, Card, Timeline, Icon } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import EchartsProjects from './EchartsProjects';
import { SRSAPI } from '../../axios/api'

class Dashboard extends React.Component {

    state = {
        running: true,
        srs_duration: 6773130,
        srs_cpu: 0.0266223,
        srs_mem_kbyte: 97616,
    }


    updateInfo = () => {
        SRSAPI.get('summaries')
            .then(response => {
                let data = response.data.data
                this.setState({
                    running: true,
                    srs_duration: data.self.srs_uptime,
                    srs_cpu: data.self.cpu_percent,
                    srs_mem_kbyte: data.self.mem_percent,
                })
            })
    }

    componentDidMount() {
        SRSAPI.get('summaries')
            .then(response => {
                let data = response.data.data
                this.setState({
                    running: true,
                    srs_duration: data.self.srs_uptime,
                    srs_cpu: data.self.cpu_percent,
                    srs_mem_kbyte: data.self.mem_percent,
                })
            })
        this.interval = setInterval(
            () => {
                SRSAPI.get('summaries')
                    .then(response => {
                        let data = response.data.data
                        this.setState({
                            running: true,
                            srs_duration: data.self.srs_uptime,
                            srs_cpu: data.self.cpu_percent,
                            srs_mem_kbyte: data.self.mem_percent,
                        })
                    })
            }
            , 6000)
    }

    componentWillUnmount() {
        this.interval && clearInterval(this.interval);
    }


    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom />
                <Row >
                    <Col className="gutter-row" >
                        <div className="gutter-box">
                            <Card bordered={false} className={'no-padding'}>
                                <EchartsProjects />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="poweroff" className="text-2x text-success" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">直播服务状态</div>
                                        <h2>Running</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="clear">
                                        <div className="text-muted">服务运行</div>
                                        <h2>{this.state.srs_duration}</h2>
                                    </div>
                                </div>
                                <div className="clear y-center">
                                    <div className="clear">
                                        <div className="text-muted">CPU占用</div>
                                        <h2>{this.state.srs_cpu}</h2>
                                    </div>
                                </div>
                                <div className="clear y-center">
                                    <div className="clear">
                                        <div className="text-muted">内存占用</div>
                                        <h2>{this.state.srs_mem_kbyte}</h2>
                                    </div>
                                </div>
                                <div className="clear y-center">
                                    <div className="clear">
                                        <div className="text-muted">网络占用</div>
                                        <h2>3 / 435Kbps / 0Kbps</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>

                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="area-chart" className="text-2x text-danger" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">在线流数目</div>
                                        <h2>303</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="clear">
                                        <div className="text-muted">系统运行</div>
                                        <h2>78天  08:43:30</h2>
                                    </div>
                                </div>
                                <div className="clear y-center">
                                    <div className="clear">
                                        <div className="text-muted">CPU状况</div>
                                        <h2>2.66% / 100.00%</h2>
                                    </div>
                                </div>
                                <div className="clear y-center">
                                    <div className="clear">
                                        <div className="text-muted">内存状况</div>
                                        <h2>19% 95MB / 491MB</h2>
                                    </div>
                                </div>
                                <div className="clear y-center">
                                    <div className="clear">
                                        <div className="text-muted">网络状况</div>
                                        <h2>3 / 435Kbps / 0Kbps</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="team" className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">在线人数</div>
                                        <h2>17</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="clear">
                                        <div className="text-muted">外网</div>
                                        <h2>0Kbps / 0Kbps</h2>
                                    </div>
                                </div>
                                <div className="clear y-center">
                                    <div className="clear">
                                        <div className="text-muted">内网</div>
                                        <h2>452Kbps / 455Kbps</h2>
                                    </div>
                                </div>
                                <div className="clear y-center">
                                    <div className="clear">
                                        <div className="text-muted">连接</div>
                                        <h2>1047967</h2>
                                    </div>
                                </div>
                                <div className="clear y-center">
                                    <div className="clear">
                                        <div className="text-muted">磁盘</div>
                                        <h2>0% 0KBps 5KBps</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={10}>


                </Row>
            </div>
        )
    }
}

export default Dashboard;