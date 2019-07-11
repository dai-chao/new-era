
import React,{ Component } from "react"
import { withRouterr } from "react-router-dom"
import axios from "axios"
class Map extends Component{
    constructor(props) {
        super(props);
        this.state = {
            address:''
        }
    }
    componentWillMount() {
        let that = this;
        axios.get('https://restapi.amap.com/v3/ip?parameters', {
            params: {
                key: '245f9f177c48709ca1326f0effd84b3d',
                sig: '',
                output:"JSON"
            }
        })
            .then(function (response) {
                let address = response.data.province;
                that.setState({address: address})
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(this.state);
    }
    render() {
        return(
            <div>
                {
                    this.state.address
                }
            </div>
        )
    }
    componentDidMount() {
        console.log(this.state);
    }
}
export default Map



