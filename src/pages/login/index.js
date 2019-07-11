import React,{ Component } from "react"
import { withRouter , Link } from "react-router-dom"
import md5 from "md5";
import "./index.css"
class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return(
            <div>
                <input type="password" placeholder="请输入密码" name="password" onChange={this.cheng.bind(this)} className="input"/>
            </div>
        )
    }
    cheng(){
        var val = document.getElementsByClassName("input")[0].value;
        var slit = "pwd";
        console.log(val);
        console.log(md5(val));
        console.log(md5(md5(slit + val)));
    }
    componentDidMount() {

    }
}
export default withRouter( Login )































