import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import "./index.css"

class Shopping extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    getInitialState(){
        return{

        }
    }
    componentWillMount() {
    }
    render() {
        return(
            <div className="shopBox">
                <div className="shoping">
                    <h2>老年人商城</h2>
                    <ul className="platTitle">
                        <li></li>
                        <li>The Popular Recommendations</li>
                        <li></li>
                    </ul>
                    <div className="clear"></div>
                    <a href="#" className="gengduo">更多动态 >></a>
                    <div className="clear"></div>
                    <div className="shop-img">
                        <div className="shop-img-1"></div>
                        <div className="shop-img-2"></div>
                    </div>
                    <div className="clear"></div>
                    <div className="shop-img-3">
                        <div>
                            <img src={require("../../images/index/mall_pictures1.png")} alt=""/>
                        </div>
                        <div>
                            <img src={require("../../images/index/mall_pictures2.png")} alt=""/>
                        </div>
                        <div>
                            <img src={require("../../images/index/mall_pictures5.png")} alt=""/>
                        </div>
                    </div>
                    <div className="clear"></div>
                    <div className="shop-img-4">
                        <div>
                            <img src={require("../../images/index/mall_pictures3.png")} alt=""/>
                        </div>
                        <div>
                            <img src={require("../../images/index/mall_pictures4.png")} alt=""/>
                        </div>
                    </div>
                    <div className="clear"></div>
                    <div className="shop-img-5">
                        <img src={require("../../images/index/mall_pictures6.png")} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
    }
    componentWillReceiveProps(nextProps, nextContext) {
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {

    }
    componentWillUpdate(nextProps, nextState, nextContext) {

    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    componentWillUnmount() {

    }
}

export default withRouter(Shopping)































