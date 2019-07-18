import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import "./index.css"
class Travel extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='travelWrap'>
                <div className='travel'>
                    <h2 className='title'>旅行服务</h2>
                    <div className='Subtitle'>
                        <div className='horizonLine'></div>
                        <span>The travel services</span>
                        <div className='horizonLine'></div>
                    </div>
                    <div className='more'><a href='javascript:;'>更多动态>></a></div>
                    <div className='info'>
                        <div className='item'>
                            <img src={require('../../images/tour_pictures1.png')}></img>
                            <p>土耳其旅游十天</p>
                        </div>
                        <div className='item'>
                            <p>土耳其旅游十天</p>
                            <img src={require('../../images/tour_pictures2.png')}></img>
                        </div>
                        <div className='item'>
                            <img src={require('../../images/tour_pictures3.png')}></img>
                            <p>土耳其旅游十天</p>
                        </div>
                        <div className='item'>
                            <p>土耳其旅游十天</p>
                            <img src={require('../../images/tour_pictures4.png')}></img>
                        </div>
                        <div className='item'>
                            <img src={require('../../images/tour_pictures5.png')}></img>
                            <p>土耳其旅游十天</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Travel);