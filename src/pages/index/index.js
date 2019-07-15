
import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import Map from "../../components/map/map"
import Header from "../../components/header/index"
import Banner2 from "../../components/banner2/index"



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
                <Map/>
                <Link to="login">登陆</Link>
            </div>
        )
    }
}
export default withRouter( Index )
















