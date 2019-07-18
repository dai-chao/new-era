import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import "./index.css"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
class UserBanner extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src={require('../../images/user/Popularrecommended_pictures01.png')} alt=""/>
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../../images/user/Popularrecommended_pictures02.png')} alt=""/>
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../../images/user/Popularrecommended_pictures03.png')} alt=""/>
                    </div>
                    <div className="swiper-slide">
                        <img src={require('../../images/user/Popularrecommended_pictures03.png')} alt=""/>
                    </div>
                    <div className="swiper-slide">Slide 5</div>
                    <div className="swiper-slide">Slide 6</div>
                    <div className="swiper-slide">Slide 7</div>
                    <div className="swiper-slide">Slide 8</div>
                    <div className="swiper-slide">Slide 9</div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        )
    }
    componentDidMount() {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
            loop: true,
            autoplay: {   //滑动后继续播放（不写官方默认暂停）
                disableOnInteraction: false,
            },
            loopFillGroupWithBlank: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}
export default withRouter(UserBanner);