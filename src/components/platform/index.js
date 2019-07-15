import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import "./index.css"

class Platform extends Component{
    constructor(props){
        super(props);
        this.state = {
            news:[
                {title:"意外险可以保终身吗？",time:"2019-02-10"},
                {title:"医保和商业医保的保障范围是什么？",time:"2019-02-10"},
                {title:"高端医疗险和普通医疗险有哪些区别？",time:"2019-02-10"},
                {title:"社保和商业保险有什么区别？",time:"2019-02-10"},
                {title:"工作时出现意外，怎么判断是否属于工伤？",time:"2019-02-10"},
                {title:"对于家庭险，先重疾还是先医疗？",time:"2019-02-10"},
                {title:"刚出生的孩子需要买教育保险吗？",time:"2019-02-10"},
                {title:"意外险可以保终身吗？",time:"2019-02-10"},
                {title:"医保和商业医保的保障范围是什么？",time:"2019-02-10"},
            ]
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
            <div className="platform">
                <div className="plat">
                    <h2>平台公告</h2>
                    <ul className="platTitle">
                        <li></li>
                        <li>The Popular Recommendations</li>
                        <li></li>
                    </ul>
                    <div className="clear"></div>
                    <a href="#"className="gengduo">更多动态 >></a>
                    <div className="plat-con">
                        <img  className="plat-img" src={require("../../images/index/announcement_picturse.png")} alt=""/>
                    </div>

                    <ul className="plat-news">
                        {
                            this.state.news.map((item,index)=>{
                                return(
                                    <a href="#" key={index}>
                                        <li >
                                            <h3>
                                                {item.title}
                                            </h3>
                                            <h3>
                                                {item.time}
                                            </h3>
                                        </li>
                                    </a>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="clear"></div>
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
export default withRouter(Platform)































