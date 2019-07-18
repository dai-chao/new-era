import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import "./index.css"
class Footer extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='footerWrap'>
                <div className='footer'>
                    <div className='logo'>
                        <a href='javascript:;'>
                            <img src=''></img>
                        </a>
                    </div>
                    <div className='content'>
                        <div className='menu'>
                            <a href='javascript:;'>关于我们</a>
                            <span className='line'></span>
                            <a href='javascript:;'>免责声明</a>
                            <span className='line'></span>
                            <a href='javascript:;'>相关协议</a>
                            <span className='line'></span>
                            <a href='javascript:;'>联系我们</a>
                        </div>    
                        <div className='info'>
                            <p>授权单位：国家老龄办</p>
                            <p>运营&技术支持：中汇祥龄</p>
                            <p>© 2019 新时代智慧健康养</p>
                            <p>办公地址：北京市朝阳区紫禁城内999号1099</p>
                            <p>400-000-8888 400-000-6666</p>
                        </div>  
                    </div>
                    <div className='qrCode'>
                        <p>手机客户端下载</p>
                        <img src={require('../../images/two_dimension code.png')}></img>
                    </div>
                </div>
            </div>
        )
    }
}
export default  withRouter(Footer);