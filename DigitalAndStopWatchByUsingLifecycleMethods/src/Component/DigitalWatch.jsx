import { Component } from "react";
import "./DigitalWatch.css"

class DigitalWatch extends Component{
state={date:new Date()}

timer=null

componentDidMount(){
    this.timer=setInterval(()=>{
        this.setState({date:new Date()})
    })
}
componentWillUnmount(){
    clearInterval(this.timer)
}

    render(){
        return(
            <div className="digital">
                <h1 className="watchheading">Digital watch</h1>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }

}

export default DigitalWatch