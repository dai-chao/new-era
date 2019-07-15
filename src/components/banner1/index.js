

import React,{ Component } from "react"
import ReactSwipe from 'react-swipe';
import "./index.css"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import banner1 from "../../images/index/banner01.png"
import banner2 from "../../images/index/banner02.png"
import banner3 from "../../images/index/banner03.png"

export default class Banner extends Component{
    constructor() {
        super();
        this.state = {
            index: 1
        }
    }
    render(){
        return(
            <div className="bannerBox">
                <div className="banner">
                    <div className="swiper-container" id="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src={banner1} alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src={banner2} alt=""/>
                            </div>
                            <div className="swiper-slide">
                                <img src={banner3} alt=""/>
                            </div>
                        </div>
                        <div className="swiper-pagination" id="swiper-pagination"></div>

                        <div className="swiper-button-prev" id="swiper-button-prev"></div>
                        <div className="swiper-button-next" id="swiper-button-next"></div>
                        {/*<div className="swiper-scrollbar"></div>*/}
                    </div>
                </div>

            </div>
        )
    }
    componentDidMount() {
        new Swiper ('.swiper-container', {
            loop: true,  //循环
            autoplay: {   //滑动后继续播放（不写官方默认暂停）
                disableOnInteraction: false,
            },
            pagination: {  //分页器
                el: '.swiper-pagination'
            },
            interval:2000,
            current:0
        })
    }
    componentDidUpdate() {
    }
}









