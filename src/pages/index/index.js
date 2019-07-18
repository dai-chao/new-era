
import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import Map from "../../components/map/map"
import Header from "../../components/header/index"
import Banner from "../../components/banner1/index"
import Platform from "../../components/platform/index"
import Shopping from "../../components/shopping/index"
import Money from "../../components/money/index"
import Footer from "../../components/footer/index"
import Legal from "../../components/legal/index"
import Travel from "../../components/travelService/index"
import Life from "../../components/lifeService/index"
import HouseKeep from "../../components/houseKeep/index"


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
                <div className="clear"></div>
                <HouseKeep/>
                <div className="clear"></div>
                <Life/>
                <div className="clear"></div>
                <Travel/>
                <div className="clear"></div>
                <Legal/>
                <div className="clear"></div>
                <Footer/>

            </div>
        )
    }
}
export default withRouter( Index )
















