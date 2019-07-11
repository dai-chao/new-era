import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import "./index.css"

class Banner1 extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return(
            <div>
                banner1
            </div>
        )
    }
}

export default withRouter( Banner1 )































