import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import "./index.css"
import { Tabs } from 'antd';
import LonginInput from '../../components/loginInput/index';
import RegisterInput from '../../components/registerInput/index';
import { nominalTypeHack } from "prop-types";
import API from '../../netwoke/api.js'
import axios from 'axios';
const { TabPane } = Tabs;
class LoginInfo extends Component{
    constructor(props){
        super(props)
        this.state={
            clickAgree:false,
            isGetCode:false,
            defaultIndex:'2',
            isGetLoginCode:false,
            phoneInput:'',
            currentTime:60,
            timeTxt:'点击获取验证码'
        }
        console.log(this.state.defaultIndex)
    }
    tabType(value){
        console.log(value)
        this.setState({
            defaultIndex:value
        })
    }
    // goRegister(value){
    //     console.log(value)
    //     this.setState({
    //         defaultIndex:value
    //     })
    // }
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
    getReqCode(){
        var count=60;
        var that=this;
        var timer=setInterval(function(){
            count--;
            if(count<0){
                that.setState({
                    isGetCode:false
                })
                document.getElementsByClassName('click-code')[0].innerHTML='点击获取验证码';
                return false;
            }
            document.getElementsByClassName('click-code')[0].innerHTML=count+'s重新获取';
            that.setState({
                isGetCode:true
            })
        },1000)
    }
    getLoginCode(){
        var that=this;
        console.log(that.state.phoneInput)

        that.setState({
            isGetLoginCode:true
        })
        var currentTime = that.state.currentTime;
        console.log(currentTime)
        var timer=setInterval(function(){
            currentTime--;
            that.setState({
                timeTxt:currentTime+'s重新获取'
            })
            if(currentTime<=0){
                clearInterval(timer);
                that.setState({
                    isGetLoginCode:false,
                    currentTime: 60,
                    timeTxt:'点击获取验证码'
                })
            }
        },1000)
        let param = new URLSearchParams()
        param.append('phone', that.state.phoneInput)
        axios({
            method: 'post',
            url: API.sendCode,
            data: param
        })
            .then(function (res) {
                // console.log(res);
                if(res.code==200){
                    alert('验证码已发送到你的手机请注意查收')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    phoneInput(e){
        this.setState({
            phoneInput:e.target.value
        })
    }
    login(){
        axios.post(API.login,{
                phone:'17812040809',
                code:'467167'
            }
        ).then((res)=>{
            console.log(res)
        })
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
                        <Tabs defaultActiveKey={this.state.defaultIndex} onChange={this.tabType.bind(this)}>
                            <TabPane tab="注册" key="1">
                                <div className={`${this.state.defaultIndex==1? "show":"hidden"}`}>
                                    <div className='phoneNumber'>
                                        <div className='name-icon'>
                                            <img src={require('../../images/login/icon_home_my.png')}></img>
                                        </div>
                                        <input type='number' placeholder='请输入常用手机号作为注册账号' className='phoneNum'/>
                                    </div>
                                    <div className='authCode'>
                                        <div className='code-icon'>
                                            <img src={require('../../images/login/icon_home_confirmation.png')}></img>
                                        </div>
                                        <input type='number' placeholder='请输入手机验证码' className='codeNum'/>
                                        <button className={['click-code',this.state.isGetCode? 'Codeclicked':''].join(' ')} onClick={this.getReqCode.bind(this)}>点击获取验证码</button>
                                    </div>
                                    <div className='agreeMent'>
                                        <input type='checkbox' className='select-agree'></input>
                                        <p className='agree-txt'>同意<span className='tips-color' onClick={this.alertAgreee.bind(this)}>《平台注册协议与隐私保护政策》</span></p>
                                    </div>
                                    <button className='btn'>注册</button>
                                </div>
                            </TabPane>
                            <TabPane tab="登录" key="2">
                                <div className={`${this.state.defaultIndex==2? "show":"hidden"}`}>
                                    <div className='phoneNumber'>
                                        <div className='name-icon'>
                                            <img src={require('../../images/login/icon_home_my.png')}></img>
                                        </div>
                                        <input type='number' placeholder='请输入常用手机号作为登录账号' className='phoneNum' onInput={this.phoneInput.bind(this)}/>
                                    </div>
                                    <div className='authCode'>
                                        <div className='code-icon'>
                                            <img src={require('../../images/login/icon_home_confirmation.png')}></img>
                                        </div>
                                        <input type='number' placeholder='请输入手机验证码' className='codeNum'/>
                                        <button className={['click-code click-code-login',this.state.isGetLoginCode? 'Codeclicked':''].join(' ')} onClick={this.getLoginCode.bind(this)}>{this.state.timeTxt}</button>
                                    </div>
                                    <div className='req-now tips-color'></div>
                                    <button className='btn' onClick={this.login.bind(this)}>登录</button>
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(LoginInfo);