import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import UserHeader from '../../components/userHeader/index'
import UserContent from '../../components/userContent/index'
import Footer from '../../components/footer/index'
class User extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <UserHeader></UserHeader>
                <div className="clear"></div>
                <UserContent></UserContent>
                <div className="clear"></div>
                <Footer></Footer>

            </div>
        )
    }
}
export default withRouter(User);