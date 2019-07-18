import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import "./index.css"
class Legal extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='legalWrap'>
                <div className='bg'></div>
                <div className='legal'>
                    <h2 className='title'>法律援助</h2>
                    <div className='Subtitle'>
                        <div className='horizonLine'></div>
                        <span>The Legal aid</span>
                        <div className='horizonLine'></div>
                    </div>
                    <div className='more'><a href='javascript:;'>更多动态>></a></div>
                    <div className='makerLine'>
                    </div>
                    <div className='info'>
                        <div className='item'>
                            <div className='point'></div>
                            <img src={require('../../images/law_pictures1.png')}></img>
                            <p>法律咨询日</p>
                        </div>
                        <div className='item'>
                            <div className='point'></div>
                            <img src={require('../../images/law_pictures2.png')}></img>
                            <p>解决纠纷</p>
                        </div>
                        <div className='item'>
                            <div className='point'></div>
                            <img src={require('../../images/law_pictures3.png')}></img>
                            <p>公共服务窗口</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default  withRouter(Legal);