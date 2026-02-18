import {Component} from  "react";
import "./counter.css"

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={count:0}
        console.log("constructor called")
    }

    componentDidMount(){
        console.log("mount called")
    }

    componentDidUpdate(){
        console.log("updated component called")
    }
    componentWillUnmount(){
        console.log("unmount called")
    }
    //short from of above constructor
    // state={count:0};   // state is used to store values which we want change dynamicly or repeatedly

    opinc=()=>{
        // this.state.count=this.state.count+1;   //this will update count value in state object but not UI(user Interface)
       this.setState({count:this.state.count+1})   //setState is used to update count  value in state object and in UI 
           //and when count is updated by setState then render method is called every time
        //    console.log(this.state.count)  
    }
     
    opres=()=>{
         this.setState({count:0}) 
    }
    opdes=()=>{
        if(this.state.count>0){
            this.setState({count:this.state.count-1}) 
        }
    }

    render(){
        console.log("render method called")
        return(
            <div className="counterdiv">
                <h1 className="countheading">Counter App</h1>
                <p className="countdisplay">{this.state.count}</p>
                <div className="btns">
                    {/* this :indicates current class*/}
                    <button id="inc" onClick={this.opinc}>Increment</button>
                    <button id="res" onClick={this.opres}>Reset</button>
                    <button id="dec" onClick={this.opdes}>Decrement</button>
                </div>
            </div>
        )
    }
}

export default Counter