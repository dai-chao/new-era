import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import "./index.css"
import UserBanner from '../user-banner/index'
import UserBanner2 from '../user-banner2/index'
class UserContent extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className='user-content'>
                    <div className='userInfo'>
                        <div className='info-title'>
                            <h3>个人信息</h3>
                            <a href="javascript:;">修改</a>
                        </div>
                        <div className='user-card'>
                            <a href="javascript:;">
                                <img src={require('../../images/user/home_headsculpture.png')} alt=""/>
                            </a>
                            <p>ID:<span>15901368702</span></p>
                            <p>昵称:<span>王老师</span></p>
                        </div>
                    </div>
                    <div className='my-oldCard'>
                        <div className='info-title'>
                            <h3>我的老年卡</h3>
                            <a href="javascript:;">已激活</a>
                        </div>
                        <a href="javascript:;">
                            <img src={require('../../images/user/old_card.png')} alt=""/>
                        </a>
                        <div className='user-handle oldCard-handle'>
                            <a href="javascript:;">办理激活</a>
                            <a href="javascript:;">点击查看</a>
                        </div>
                    </div>
                    <div className='myAccount'>
                        <div className='info-title'>
                            <h3>我的账户</h3>
                        </div>
                        <div className='account-info'>
                            <div className='integral'>
                                <span className='num'>100000</span>
                                <span>积分</span>
                            </div>
                            <div className='balance'>
                                <span className='num'>0</span>
                                <span>余额</span>
                            </div>
                        </div>
                        <div className='user-handle account-handle'>
                            <a href="javascript:;">积分记录</a>
                            <a href="javascript:;" className='use-now'>立即使用</a>
                            <a href="javascript:;">余额明细</a>
                        </div>
                    </div>
                </div>
                <div className='order-record'>
                    <div className='user-order'>
                        <div className='info-title'>
                            <h3>我的订单</h3>
                        </div>
                        <div className='order-list'>
                            <div className='order-item'>
                                <a href="javascript:;">
                                    <img src={require('../../images/user/icon_pay.png')} alt=""/>
                                </a>
                                <p>待付款</p>
                            </div>
                            <div className='order-item'>
                                <a href="javascript:;">
                                    <img src={require('../../images/user/icon_confirm.png')} alt=""/>
                                </a>
                                <p>待确认</p>
                            </div>
                            <div className='order-item'>
                                <a href="javascript:;">
                                    <img src={require('../../images/user/icon_evaluate.png')} alt=""/>
                                </a>
                                <p>带评价</p>
                            </div>
                            <div className='order-item'>
                                <a href="javascript:;">
                                    <img src={require('../../images/user/icon_customerservice.png')} alt=""/>
                                </a>
                                <p>售后服务</p>
                            </div>
                        </div>
                    </div>
                    <div className='user-record'>
                        <div className='info-title'>
                            <h3>浏览记录</h3>
                            <a href="javascript:;">更多>></a>
                        </div>
                        <div className='user-record-banner'>
                            <UserBanner2></UserBanner2>
                        </div>
                    </div>
                </div>
                <div className='user-recomment'>
                    <h2>热门推荐</h2>
                    <div className='user-banner-wrap'>
                        <UserBanner></UserBanner>
                    </div>
                </div>
            </div>
        )

    }}
export default withRouter(UserContent);