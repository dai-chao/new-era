import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import "./index.css"
class Life extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='lifeWrap'>
               <div className='life'>
                    <h2 className='title'>生活服务</h2>
                    <div className='Subtitle'>
                        <div className='horizonLine'></div>
                        <span>The Life Service</span>
                        <div className='horizonLine'></div>
                    </div>
                    <div className='more'><a href='javascript:;'>更多动态>></a></div>
                   <div className='info'>
                       <div className='item'>
                           <div className='item_content'>
                                <img src={require('../../images/life service_pictures1.png')}></img>
                                <button>充值缴费</button>
                                <div className='item_txt'>家居保洁是指通过专业保洁专员使用清洁设备、工具和药剂，对居室内地面、墙面、顶棚、阳台、厨房、卫生间等部位进行清扫保洁。</div>
                           </div>
                       </div>
                       <div className='verticalLine'>
                           <div className='circle circle1'></div>
                           <div className='circle circle2'></div>
                       </div>
                       <div className='item'>
                           <div className='item_content'>
                                <img src={require('../../images/life service_pictures2.png')}></img>
                                <button>服务到家</button>
                                <div className='item_txt'>家居保洁是指通过专业保洁专员使用清洁设备、工具和药剂，对居室内地面、墙面、顶棚、阳台、厨房、卫生间等部位进行清扫保洁。</div>
                           </div>
                       </div>
                       <div className='verticalLine'>
                           <div className='circle circle1'></div>
                           <div className='circle circle2'></div>
                       </div>
                       <div className='item'>
                           <div className='item_content'>
                                <img src={require('../../images/life service_pictures3.png')}></img>
                                <button>文娱活动</button>
                                <div className='item_txt'>家居保洁是指通过专业保洁专员使用清洁设备、工具和药剂，对居室内地面、墙面、顶棚、阳台、厨房、卫生间等部位进行清扫保洁。</div>
                           </div>
                       </div>
                   </div>
               </div> 
            </div>
        )
    }
}
export default withRouter(Life);