import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import ReactSwipe from 'react-swipe';
import "./index.css"

class Banner2 extends Component{
    constructor(props){
        super(props);
        this.state = {
            index:0
        }
    }
    render(){
        return(
            <div>
                banner2
            </div>
        )
    }
}

export default withRouter( Banner2 )































