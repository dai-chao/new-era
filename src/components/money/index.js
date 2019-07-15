import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import "./index.css"

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {

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
            <div className="money-box">
                <div className="money">
                    <div className="money-left">

                    </div>

                    <div className="money-right">

                    </div>
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

export default withRouter(Index)































