import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import ban1 from "../../images/xiang.jpg"
import "./index.css"





class Header extends Component{

    getInitialState(){
        return{
            name:11
        }
    }
    constructor(props){
        super(props);
        this.state = {
            ban1:ban1
        }
    }

    componentWillMount() {
    }

    render() {
        return(
            <div className="headerWarp">
                <div className="header bg1">
                    header
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
export default withRouter(Header)






























