import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import Map from "../map/map"
import "./index.css"
class UserHeader extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='user-headerWrap'>
                <div className='user-header'>
                    <div className='user-title'>
                        <h2>新时代智慧健康养老服务平台</h2>
                        <p>互联网+养老生活服务，真正为中国老年人服务</p>
                    </div>
                    <div className='user-search'>
                        <input type="text" placeholder='请输入你想了解的服务／讯息等'/>
                        <div className='search-icon'>
                            <img src={require('../../images/user/icon_home_search.png')} alt=""/>
                        </div>
                    </div>
                    <div className='user-map'>
                        <img src={require('../../images/user/icon_home_map.png')} alt=""/>
                        <Map></Map>
                    </div>
                    <div className='user-cart'>
                        <img src={require('../../images/user/icon_home_cart.png')} alt=""/>
                        <span>我的购物车</span>
                    </div>
                    <div className='back-index'>回到首页</div>
                </div>
            </div>
        )
    }
}
export default withRouter(UserHeader);