import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import "./index.css"
class LoginHeader extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='loginHeaderWrap'>
                <div className='loginHeader'>
                   <div className='loginTitle'>
                        <h2>新时代智慧健康养老服务平台</h2>
                        <p>互联网+养老生活服务，真正为中国老年人服务</p>
                   </div>
                   <div className='welcome-login'>欢迎登录</div>
                </div>
            </div>
        )
    }
}
export default withRouter(LoginHeader);