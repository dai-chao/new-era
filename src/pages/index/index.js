
import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import Map from "../../components/map/map"
import Header from "../../components/header/index"
import Banner2 from "../../components/banner2/index"



class Index extends Component{
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div>
                <Header/>
                <Map/>
                <Link to="login">登陆</Link>
            </div>
        )
    }
}
export default withRouter( Index )
















