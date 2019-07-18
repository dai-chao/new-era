import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import "./index.css"

class Index extends Component{
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
            <div className="money-box">
                <div className="money">
                    <div className="money-left">
                        <div className="money-left-top">
                            <h3>
                                金融服务
                            </h3>
                            <h4>
                                Financial service
                            </h4>
                            <a href="#">更多动态 >></a>
                            <h5>
                                金融服务是指金融机构运用货币交易手段融通有价物品，向金融活动参与者和顾客提供的共同受益、获得满足的活动。
                            </h5>
                        </div>
                        <div className="money-left-bottom">
                            <div>
                                <img src={require("../../images/index/finance_pictures1.png")} alt=""/>
                            </div>
                            <div>
                                <img src={require("../../images/index/finance_pictures2.png")} alt=""/>
                            </div>
                            <div>
                                <img src={require("../../images/index/finance_pictures3..png")} alt=""/>
                            </div>
                        </div>
                    </div>

                    <div className="money-right">
                        <div className="money-right-top">
                            <h3>
                                医疗保健
                            </h3>
                            <h4>
                                Medical care
                            </h4>
                            <a href="#">更多动态 >></a>
                            <h5>
                                医疗保健（PC）的定义是药师直接、负责地提供的与药物治疗相关的服务，其目的是达到改善病人生命质量的确切效果。
                            </h5>
                        </div>
                            <div className="money-right-bottom">
                                    <div>
                                        <img src={require("../../images/index/medical_pictures1.png")} alt=""/>
                                    </div>
                                    <div>
                                        <img src={require("../../images/index/medical_pictures2.png")} alt=""/>
                                    </div>
                                    <div>
                                        <img src={require("../../images/index/medical_pictures3.png")} alt=""/>
                                    </div>
                             <div>
                            </div>
                        </div>
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

export default withRouter(Index)































