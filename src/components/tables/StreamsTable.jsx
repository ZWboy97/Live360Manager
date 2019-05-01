import React from 'react';
import { Table, Icon, Button } from 'antd';

const columns = [{
    title: '流ID',
    dataIndex: 'id',
    align: 'center',
    render: text => <span>{text}</span>,
}, {
    title: 'APP',
    dataIndex: 'app',
    align: 'center',
    render: text => <span>{text}</span>,
}, {
    title: '流名称',
    dataIndex: 'name',
    align: 'center',
    render: (text) => <span>{text}</span>
}, {
    title: 'Vhost',
    dataIndex: 'vhost',
    align: 'center',
}, {
    title: '流状态',
    dataIndex: 'clients',
    align: 'center',
    render: clients => <span>{clients > 0 ? '有流' : '无流'}</span>
}, {
    title: '在线人数',
    dataIndex: 'clients',
    align: 'center',
}, {
    title: '入口带宽',
    dataIndex: 'kbps.recv_30s',
    align: 'center',
    render: kbps => <span>{(kbps / 1000).toFixed(2) + 'Mbps'}</span>
},
{
    title: '出口带宽',
    dataIndex: 'kbps.send_30s',
    align: 'center',
    render: kbps => <span>{(kbps / 1000).toFixed(2) + "Mbps"}</span>
},
{
    title: '视频信息',
    dataIndex: 'video',
    align: 'center',
    render: (video) => <span>{
        (video && 'profile' in video) ? video.codec + '/' + video.profile + '/' + video.level : ""
    }</span>
}, {
    title: '音频信息',
    dataIndex: 'audio',
    align: 'center',
    render: audio => <span>{
        (audio && 'profile' in audio) ? audio.codec + '/' + audio.profile + '/' + audio.sample_rate : ""
    }</span>
}, {
    title: '操作',
    align: 'center',
    render: (text, record) => (
        <span>
            <Button>预览</Button>
            <span className="ant-divider" />
            <Button>踢流</Button>
            <span className="ant-divider" />
        </span>
    ),
}];

class StreamsTable extends React.Component {
    render() {
        return (
            <Table columns={columns} dataSource={this.props.streams} />
        )
    }
}

export default StreamsTable;