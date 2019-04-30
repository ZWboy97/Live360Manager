import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Spin, message } from 'antd';
import { connectAlita } from 'redux-alita';
import { UserApi, API } from '../../axios/api'
const FormItem = Form.Item;

class Login extends React.Component {

    state = {
        logining: false
    }

    componentDidMount() {
        const { setAlitaState } = this.props;
        setAlitaState({ stateName: 'auth', data: null });
    }

    componentDidUpdate(prevProps) {
        const { auth: nextAuth = {}, history } = this.props;
        if (nextAuth.data && nextAuth.data.uid) { // 判断是否登陆
            localStorage.setItem('user', JSON.stringify(nextAuth.data));
            history.push('/');
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { setAlitaState } = this.props;
                this.setState({
                    logining: true
                })
                API.post('users', { userName: values.userName, passWord: values.password })
                    .then(response => {
                        console.log(response);
                        console.log(response.data);
                        if (response.status == 200) {
                            if (response.data.role == 'admin') {
                                setAlitaState({ funcName: 'admin', stateName: 'auth' });
                            } else {
                                setAlitaState({ funcName: 'guest', stateName: 'auth' });
                            }
                        } else if (response.status == 404) {
                            message.error('用户名不存在!');
                        } else if (response.status == 401) {
                            message.error('用户名或密码错误，请重新输入!')
                            this.props.form.resetFields()
                        } else {
                            message.error('登录失败！')
                            setAlitaState({ funcName: 'admin', stateName: 'auth' });
                        }
                    }).catch(r => {
                        message.error('登录失败，请稍后重试！')
                    }).finally(() => {
                        this.setState({ logining: false })
                    });

            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div className="login-logo-image">
                    <img src={require('../../style/imgs/logo.png')} alt="logo" />
                </div>
                <Spin spinning={this.state.logining} delay={500}>
                    <div className="login-form" >
                        <div className="login-logo">
                            <p>Live360 全景直播管理后台</p>
                        </div>
                        <Form onSubmit={this.handleSubmit} style={{ maxWidth: '300px' }}>
                            <FormItem>
                                {getFieldDecorator('userName', {
                                    rules: [{ required: true, message: '请输入用户名!' }],
                                })(
                                    <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码!' }],
                                })(
                                    <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('remember', {
                                    valuePropName: 'checked',
                                    initialValue: true,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )}
                                <span className="login-form-forgot" href="" style={{ float: 'right' }}>忘记密码</span>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
                                    登录
                            </Button>
                                <p style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span >现在注册</span>
                                </p>
                            </FormItem>
                        </Form>
                    </div>
                </Spin>
            </div>
        );
    }
}

export default connectAlita(['auth'])(Form.create()(Login));