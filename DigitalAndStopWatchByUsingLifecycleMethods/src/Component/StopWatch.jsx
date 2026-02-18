import { Component } from "react";
import './StopWatch.css'

class StopWatch extends Component{

    state={sec:0,
        min:0,
        hour:0,
        isRunning:false
    };

    timer=null;

    startbtn = () => {
    if (this.state.isRunning) return;

    this.setState({ isRunning: true });

    this.timer = setInterval(() => {
      this.setState((prev) => {
        let { sec, min, hour } = prev;

        sec++;

        if (sec === 60) {
          sec = 0;
          min++;
        }

        if (min === 60) {
          min = 0;
          hour++;
        }

        return { sec, min, hour };
      });
    }, 1000);
  };


    restbtn=()=>{
        clearInterval(this.timer)
         this.setState({
      sec: 0,
      min: 0,
      hour: 0,
      isRunning: false
    });
    }
    stopbtn=()=>{
        clearInterval(this.timer)
        this.setState({isRunningc:false})
    }

    render(){
        const{sec,min,hour,isRunning}=this.state
        return(
            <div>
                <h1 className="heading">Stop Watch </h1>
            <h1>{`${hour<10?"0"+hour:hour}:${min<10?"0"+min:min}:${sec<10?"0"+sec:sec}`}</h1>
            <div className="btn">
                <button onClick={this.startbtn}>Start</button>
                <button onClick={this.restbtn}>Reset</button>
                <button onClick={this.stopbtn}>Stop</button>
            </div>
            </div>
        )

    }
}
export default StopWatch