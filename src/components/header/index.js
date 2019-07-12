import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import ban1 from "../../images/xiang.jpg"
import "./index.css"


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            ban1:ban1
        }
    }
    render() {
        return(
            <div className="headerWarp">
                <div className="header bg1">
                    <img className="img" src={require('../../images/xiang.jpg')} alt=""/>
                    <img  className="img"  src={this.state.ban1} alt=""/>
                    <img className="img" src={ban1} alt=""/>
                </div>
            </div>
        )
    }
}
export default withRouter(Header)






























