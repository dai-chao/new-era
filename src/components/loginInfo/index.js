import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import "./index.css"
import { Tabs } from 'antd';
import LonginInput from '../../components/loginInput/index';
import RegisterInput from '../../components/registerInput/index';
import { nominalTypeHack } from "prop-types";
const { TabPane } = Tabs;
class LoginInfo extends Component{
    constructor(props){
        super(props)
        this.state={
            clickAgree:false
        }
        console.log(this.state);
    }
    tabType(){
        console.log(111)
    }
    alertAgreee(){
        document.getElementsByClassName('agree-alert')[0].style.display='block';
        document.getElementsByClassName('fill-box')[0].style.display='none';
    }
    closeBtn(){
        document.getElementsByClassName('agree-alert')[0].style.display='none';
        document.getElementsByClassName('fill-box')[0].style.display='block'
    }
    continue(){
        document.getElementsByClassName('agree-alert')[0].style.display='none';
        document.getElementsByClassName('fill-box')[0].style.display='block';
        document.getElementsByClassName('select-agree')[0].checked=true;
    }
    render(){
        return(
            <div className='req-info'>
                <div className='req-content'>
                    <div className='agree-alert off'>
                        <div className='agree-title'>
                            <h2>注册协议</h2>
                            <div className='close-btn' onClick={this.closeBtn.bind(this)}>X</div>
                        </div>
                            <div className='agree-info'>
                             一、服务条款的确认及接受 1、新时代智慧健康养老服务平台（包括网站及其移动客户端软件，以下称“本平台”）各项电子服务的所有权和
                            </div>
                        <div className='agree-continue'>
                        <button className='continue-btn' onClick={this.continue.bind(this)}>同意并继续</button>
                        </div>
                    </div>
                    <div className='fill-box'>
                        <Tabs defaultActiveKey="1" onChange={this.tabType}>
                            <TabPane tab="注册" key="1">
                                <RegisterInput></RegisterInput>
                                <div className='agreeMent'>
                                    <input type='checkbox' className='select-agree'></input>
                                    <p className='agree-txt'>同意<span className='tips-color' onClick={this.alertAgreee.bind(this)}>《平台注册协议与隐私保护政策》</span></p>
                                </div>
                                <button className='btn'>注册</button>
                            </TabPane>
                            <TabPane tab="登录" key="2">
                                <LonginInput></LonginInput>
                                <div className='req-now tips-color'>立即注册>></div>
                                <button className='btn'>登录</button>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(LoginInfo);