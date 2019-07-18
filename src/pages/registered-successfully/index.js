import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import Footer from "../../components/footer/index"
import "./index.css"

class RegisteredSuccessfully extends Component{
    constructor(props){
        super(props);
        this.state = {
            time:3
        }
    }
    getInitialState(){

        return{

        }
    }
    componentWillMount() {

    }
    render() {
        return(
            <div className="registeredSuccessfully">

                <div className='loginHeaderWrap'>
                    <div className='loginHeader'>
                        <div className='loginTitle'>
                            <h2>新时代智慧健康养老服务平台</h2>
                            <p>互联网+养老生活服务，真正为中国老年人服务</p>
                        </div>
                        {/*<div className='welcome-login'>欢迎登录</div>*/}
                    </div>
                </div>
                <div className="clear"></div>
                <div className="reg-cont-warp">
                    <div className="reg-cont">
                        <h2>恭喜您注册成功！</h2>
                        <h2>{this.state.time}秒后将完成登陆并自动跳转至首页</h2>
                        <h2>或点击 <Link to="/index">手动跳转</Link>至首页</h2>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
    componentDidMount() {
        var tim = setInterval( ()=>{
            var tms = this.state.time-1 ;
            this.state.time = tms;
            this.setState({time:tms});
            if(this.state.time === 0){
                this.props.history.push("index");
                clearInterval(tim)
            }
        },1000 )

    }
    componentWillReceiveProps(nextProps, nextContext) {
    }

    componentWillUpdate(nextProps, nextState, nextContext) {

    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    componentWillUnmount() {

    }
}

export default withRouter(RegisteredSuccessfully)































