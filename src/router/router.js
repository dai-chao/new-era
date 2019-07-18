import React,{ Component } from "react"
import { HashRouter, Route,Switch} from "react-router-dom";
import App from "../App"
import Index from "../pages/index/index"
import Login from "../pages/login/index"
import Register from "../pages/register/index"
import RegisteredSuccessfully from "../pages/registered-successfully/index"
import PaymentCode from "../pages/payment-code/index"
import User from "../pages/user/index"
import UserInfo from "../pages/userInfo/index"
class Router extends Component{
    constructor(props){
        super(props);
        this.state ={
            name:{...this.props}
        }
    }
    render(){
        // console.log(this.state);
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route exact path="/" component={ Index }/>
                        <Route path="/index" component={ Index }/>
                        <Route path="/login" component={ Login }/>
                        <Route path="/register" component={Register}/>
                        <Route path="/registeredSuccessfully" component={RegisteredSuccessfully}/>
                        <Route path="/paymentCode" component={PaymentCode}/>
                        <Route path="/user" component={User}/>
                        <Route path="/userInfo" component={UserInfo}/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
export default Router








