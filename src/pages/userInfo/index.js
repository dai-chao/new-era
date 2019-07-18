import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import UserHeader from '../../components/userHeader/index'
import Footer from '../../components/footer/index'
import './index.css'
class UserInfo extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <UserHeader></UserHeader>
                <div className='clear'></div>
                <div className='userInfo-content'>
                    <div className='Subtitle'>
                        <p><span>个人中心</span>>个人信息</p>
                    </div>
                    <div className='info-manage'>
                        <div className='head-pic'>
                            <p>个人信息</p>
                        </div>
                        <div className='info-txt'>

                        </div>
                    </div>
                    <div className='payment-manage'>

                    </div>
                    <div className='address-manage'>

                    </div>
                </div>
                <div className='clear'></div>
                <Footer></Footer>
            </div>
        )
    }
}
export default withRouter(UserInfo);