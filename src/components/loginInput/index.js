import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import "./index.css"
import { Button } from 'antd';
class LonginInput extends Component{
    constructor(props){
        super(props);
        this.state={
            isGetCode:false
        }
        console.log(this.state.isGetCode)
    }
    getLoginCode(){
        var count=60;
        var that=this;
        var timer=setInterval(function(){
            count--;
            if(count<0){
                that.setState({
                    isGetCode:false
                })
                document.getElementsByClassName('clice-code')[0].innerHTML='点击获取验证码';
                return false;
            }
            document.getElementsByClassName('clice-code')[0].innerHTML=count+'s重新获取';
            that.setState({
                isGetCode:true
            })
        },1000)
    }
    render(){
        return(
            <div>
                <div className='phoneNumber'>
                    <div className='name-icon'>
                        <img src={require('../../pages/register/images/icon_home_my.png')}></img>
                    </div>
                    <input type='number' placeholder='请输入常用手机号作为登录账号' className='phoneNum'/>
                </div>
                <div className='authCode'>
                    <div className='code-icon'>
                        <img src={require('../../pages/register/images/icon_home_confirmation.png')}></img>
                    </div>
                    <input type='number' placeholder='请输入手机验证码' className='codeNum'/>
                    <button className={['clice-code',this.state.isGetCode? 'Codeclicked':''].join(' ')} onClick={this.getLoginCode.bind(this)}>点击获取验证码</button>
                </div>
            </div>
        )
    }
}  
export default withRouter(LonginInput);