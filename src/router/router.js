


import React,{ Component } from "react"
import { HashRouter, Route,Switch} from "react-router-dom";
import App from "../App"
import Index from "../pages/index/index"
import Login from "../pages/login/index"

class Router extends Component{
    constructor(props){
        super(props);
        this.state ={
            name:{...this.props}
        }
    }
    render(){
        console.log(this.state);
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route exact path="/" component={ Index }/>
                        <Route path="/index" component={ Index }/>
                        <Route path="/login" component={ Login }/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
export default Router








