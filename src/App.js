


import React,{Component} from 'react';
import './App.css';
class App extends Component{
  constructor(props){
    super(props)
  }
  componentWillMount() {
  }
  render(){
    return(
        <div>
          {
            this.props.children
          }
        </div>
    )
  }
  componentDidMount() {

  }
}

export default App;
