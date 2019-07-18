
import React,{ Component } from "react"
import { withRouterr } from "react-router-dom"
import axios from "axios"
import { Button } from "antd"
import "./map.css"


 function setCookie(name,val,days) { //存cookie
    var oDate = new Date();
    oDate.setDate(oDate.getDate() + days);
    document.cookie = name + "=" + val + ";expires=" + oDate;
};



class Map extends Component{
    constructor(props) {
        super(props);
        this.state = {
            address:'',
            mvp:[{title:"北京"},{title:"天津"},{title:"河北"},{title:"山西"},{title:"内蒙古"},{title:"辽宁"},{title:"吉林"},{title:"黑龙江"},{title:"山东"},{title:"河南"},{title:"江苏"},{title:"上海"},{title:"浙江"},{title:"安徽"},{title:"湖南"},{title:"湖北"},{title:"江西"},{title:"福建"},{title:"广东"},{title:"海南"},{title:"广西"},{title:"云南"},{title:"贵州"},{title:"西藏"},{title:"四川"},{title:"重庆"},{title:"陕西"},{title:"宁夏"},{title:"甘肃"},{title:"青海"},{title:"新疆"},{title:"港澳台"},
            ]
        }
    }
    componentWillMount() {
        let that = this;
        axios.get('https://restapi.amap.com/v3/ip?parameters', {
            params: {
                key: '3fb415a88417f7151e640a2538f60ea3',
                sig: '',
                output:"JSON"
            }
        })
            .then(function (response) {
                let address = response.data.province;
                // console.log(address);
                that.state={
                    address:address
                };
                that.setState({address: address});
                // setCookie("代超",address,1);
            })
            .catch(function (error) {
                console.log(error);
            });


    }
    render() {
        return(
            <div>
                <div>{
                    this.state.address
                }
                </div>
            </div>
        )
    }
    componentDidMount() {
        // console.log(this.state);

    }
}
export default Map



