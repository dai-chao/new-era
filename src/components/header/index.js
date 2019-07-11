import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import "./index.css"


class Header extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div className="headerWarp">
                <div className="header bg1">
                    新时代智慧健康养老服务平台
                </div>
            </div>
        )
    }
}
export default withRouter(Header)






























