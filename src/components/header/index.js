import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import Map from "../map/map"
import "./index.css"





class Header extends Component{

    getInitialState(){
        return{
            name:11
        }
    }
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
    }

    render() {
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
                        <li>
                            <span>
                                <img src={require("../../images/index/icon_home_map.png")} alt=""/>
                            </span>
                            <span>
                                <Map/>
                            </span>
                        </li>
                        <li className="icon-my-box">
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






























