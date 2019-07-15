
import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import Map from "../../components/map/map"
import Header from "../../components/header/index"
import Banner from "../../components/banner1/index"
import Platform from "../../components/platform/index"
import Shopping from "../../components/shopping/index"
import Money from "../../components/money/index"

class Index extends Component{
    constructor(props) {
        super(props);
        this.state={
            name:1
        }
    }
    render() {
        return(
            <div>
                <Header name={this.state.name}/>
                <div className="clear"></div>
                <Banner/>
                <div className="clear"></div>
                <Platform/>
                <div className="clear"></div>
                <Shopping/>
                <div className="clear"></div>
                <Money/>
                <Link to="login">登陆</Link>
            </div>
        )
    }
}
export default withRouter( Index )
















