import React from 'react';
import { Table, Icon, Button } from 'antd';

const columns = [{
    title: '流ID',
    dataIndex: 'name',
    key: 'name',
    render: text => <span>{text}</span>,
}, {
    title: '流名称',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Vhost',
    dataIndex: 'address',
    key: 'address',
}, {
    title: '流状态',
    dataIndex: 'address',
    key: 'address',
}, {
    title: '在线人数',
    dataIndex: 'address',
    key: 'address',
}, {
    title: '入口带宽',
    dataIndex: 'address',
    key: 'address',
},
{
    title: '出口带宽',
    dataIndex: 'address',
    key: 'address',
},
{
    title: '视频信息',
    dataIndex: 'address',
    key: 'address',
}, {
    title: '音频信息',
    dataIndex: 'address',
    key: 'address',
}, {
    title: '操作',
    key: 'action',
    render: (text, record) => (
        <span>
            <Button>Action 一 {record.name}</Button>
            <span className="ant-divider" />
            <Button>Delete</Button>
            <span className="ant-divider" />
            <Button className="ant-dropdown-link">
                More actions <Icon type="down" />
            </Button>
        </span>
    ),
}];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York ',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'rk',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'rk',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'rk',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'rk',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'rk',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'rk',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'rk',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'rk',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'rk',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'rk',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'rk',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney ',
}];

const StreamsTable = () => (
    <Table columns={columns} dataSource={data} />
);

export default StreamsTable;