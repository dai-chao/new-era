import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import Footer from "../../components/footer/index"
import "./index.css"
import { Form, Select, Input, Button } from 'antd';
import API from '../../netwoke/api.js'
import axios from 'axios';
const { Option } = Select;

class PaymentCode extends Component{
    constructor(props){
        super(props);
        this.state = {
            selectVal:'',
            selectVal2:''
        }
    }

    getInitialState(){
        return{

        }
    }
    handleSelectChange(value){
        if(!this.state.selectVal||value!=':'+this.state.selectVal){
            this.setState({
                selectVal:':'+value
            })
        }
    }
    handleSelectChange2(value){
        if(!this.state.selectVal2||value!=':'+this.state.selectVal2){
            this.setState({
                selectVal2:':'+value
            })
        }
    }
    componentWillMount() {
    }
    componentDidMount() {
        axios.post(API.findQuestion).then(({data})=>{
            console.log(data)
        })
    }

    render() {
        return(
            <div>
                <div className='loginHeaderWrap'>
                    <div className='loginHeader'>
                        <div className='loginTitle'>
                            <h2>新时代智慧健康养老服务平台</h2>
                            <p>互联网+养老生活服务，真正为中国老年人服务</p>
                        </div>
                        {/*<div className='welcome-login'>欢迎登录</div>*/}
                    </div>
                </div>
                <div className="payment-warp">
                    <div className="payment">
                        <h2>设置支付密码</h2>
                        <div className='payment-info'>
                            <div className='payment-item'>
                                <input type="password" placeholder="请设置6位数字支付密码"/>
                            </div>
                            <div className='payment-item'>
                                <input type="password" placeholder="请重新输入支付密码，确保密码一致"/>
                            </div>
                            <div className='payment-browsers'>
                                <Select placeholder="密保问题1" onChange={this.handleSelectChange.bind(this)} value={'密保问题1'+this.state.selectVal}>
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                </Select>
                            </div>
                            <div className='payment-item'>
                                <input type="text" placeholder="密保答案"/>
                            </div>
                            <div className='payment-browsers'>
                                <Select onChange={this.handleSelectChange2.bind(this)}  value={'密保问题2'+this.state.selectVal2}>
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                </Select>
                            </div>
                            <div className='payment-item'>
                                <input type="text" placeholder="密保答案"/>
                            </div>
                            <p className='payment-tips'>*密码保护问题用于找回密码,请牢记答案</p>
                            <div className='save-btn'>
                                <button>保存</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(PaymentCode)































