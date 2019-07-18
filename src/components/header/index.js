import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import Map from "../map/map"
import "./index.css"

class Header extends Component{
    getInitialState(){
        return{

        }
    }
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentWillMount() {

        function getCookie(name){
            var arr = document.cookie.split(";");
            for(var i = 0; i < arr.length; i++){
                var cur = arr[i].replace(/^\s*/g,"");
                var str = cur.split("=");
                if(str[0] == name){
                    return str[1];
                }
            }
            return "";
        }

        let cok = getCookie("代超");
        this.state.loginType = cok;
    }

    render() {
        console.log(this.state);
        return(
            <div className="headerWarp">
                <div className="header">
                    <a href="#" className="logo">
                        <img src="" alt="" className="Logo"/>
                    </a>
                    <ul className="nav">
                        <li>老年人商城</li>
                        <li>保险</li>
                        <li>
                            更多
                            <img src={require("../../images/index/icon_home_down.png")} alt="" className="icon"/>
                            <ul className="navList">
                                <li>
                                    <a href="">医疗保健</a>
                                </li>
                                <li>
                                    <a href="">家政服务</a>
                                </li>
                                <li>
                                    <a href="">生活服务</a>
                                </li>
                                <li>
                                    <a href="">旅行服务</a>
                                </li>
                                <li>
                                    <a href="">法律援助</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <input type="text" placeholder="请输入你想要了解服务/讯息等"/>
                            <img src={require("../../images/index/icon_home_search.png")} alt=""/>
                        </li>
                        <li id="nav-map">
                            <span>
                                <img src={require("../../images/index/icon_home_map.png")} alt=""/>
                            </span>
                            <span>
                                <Map/>
                            </span>
                        </li>

                        <li className="login-box">
                            <Link to="/login?type=1">
                                登陆
                            </Link>
                            <span></span>
                            <Link className="zhuce" to="/login?type=2">
                                注册
                            </Link>
                        </li>

                        <li className="icon-my-box" id="icon-my-box">
                            <span id="icon-my">
                                <img src={require("../../images/index/icon_home_my.png")} alt=""/>
                            </span>
                            <span>
                                王老师
                            </span>
                        </li>

                    </ul>
                </div>

            </div>
        )
    }
    componentDidMount() {
        var loginType =document.getElementById("icon-my-box");
        var logintype = document.getElementsByClassName("login-box")[0];
        console.log(logintype);
        if(this.state.loginType === "true"){
            loginType.style.display = "block";
            logintype.style.display = "none"
        }else {
            logintype.style.display = "block";
            loginType.style.display = "none"
        }
    }
    componentWillReceiveProps(nextProps, nextContext) {
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

    }
    componentWillUpdate(nextProps, nextState, nextContext) {

    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    componentWillUnmount() {

    }


}
export default withRouter(Header)






























