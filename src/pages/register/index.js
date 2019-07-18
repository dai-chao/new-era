import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import "./index.css"
import LoginHeader from "../../components/loginHeader/index"
import LoginInfo from "../../components/loginInfo/index"
import Footer from "../../components/footer/index"
class Register extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <LoginHeader></LoginHeader>
                <LoginInfo></LoginInfo>
                <Footer></Footer>
            </div>
        )
    }
}
export default withRouter(Register);