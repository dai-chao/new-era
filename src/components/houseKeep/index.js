import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import "./index.css"
class HouseKeep extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='house-keep-wrap'>
                <div className='house-keep'>
                    <h2>老年人商城</h2>
                    <ul className="house-keep-platTitle">
                        <li></li>
                        <li>The Popular Recommendations</li>
                        <li></li>
                    </ul>
                    <div className="clear"></div>
                    <a href="#" className="gengduo">更多动态 >></a>
                    <div className="clear"></div>
                    <div className="house-keep-cont">
                        <div className="keep-bor">
                            <div className='house-keep-cont-img'>
                                <img src={require("../../images/index/housekeeping_pictures1.png")} alt=""/>
                            </div>
                            <div className="keep-icon">
                                <span>
                                    <img src={require("../../images/index/icon_rhombus.png")} alt=""/>
                                </span>
                                <span>
                                    衣服清洗
                                </span>
                            </div>
                            <div className="keep-txt">
                                <p>家居保洁是指通过专业保洁专员使用清洁设备、工具和药剂，对居室内地面、墙面、顶棚、阳台、厨房、卫生间等部位进行清扫保洁。</p>
                            </div>
                        </div>
                        <div className="keep-bor">
                            <div className="keep-txt" id="keep-txt">
                                <p>家电清洗包括电器很多：饮水机、油烟机、空调、洗衣机、电磁炉、电冰箱、电脑、电视等一些经常使用的家用电器。</p>
                            </div>
                            <div className="keep-icon" id="keep-icon">
                                <span>
                                    <img src={require("../../images/index/icon_rhombus.png")} alt=""/>
                                </span>
                                <span>
                                    家电清洗
                                </span>
                            </div>
                            <div className='house-keep-cont-img' id="house-keep-cont-img">
                                <img src={require("../../images/index/housekeeping_pictures2.png")} alt=""/>
                            </div>


                        </div>
                        <div className="keep-bor">
                            <div className='house-keep-cont-img'>
                                <img src={require("../../images/index/housekeeping_pictures3.png")} alt=""/>
                            </div>
                            <div className="keep-icon">
                                <span>
                                    <img src={require("../../images/index/icon_rhombus.png")} alt=""/>
                                </span>
                                <span>
                                    家居保洁
                                </span>
                            </div>
                            <div className="keep-txt">
                                <p>家居保洁是指通过专业保洁专员使用清洁设备、工具和药剂，对居室内地面、墙面、顶棚、阳台、厨房、卫生间等部位进行清扫保洁</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(HouseKeep);