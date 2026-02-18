import { useEffect, useState } from "react";
import "./StopWatch.css"

function Stopwatch(){
    const[sec,setSec]=useState(0)
    const[isRunning,setIsRunning]=useState(false)

    useEffect(()=>{
        let timer;
        if(isRunning){
            timer=setInterval(()=>{
            setSec(prev=>prev+1)
        })
        }
        return ()=>{
            clearInterval(timer)
        }
    },[isRunning])
    return(
        <div className="watch">
            <h3>STOP WATCH</h3>
            <h1>{`${Math.floor(sec/3600)<10?"0"+Math.floor(sec/3600):Math.floor(sec/3600)}:
            ${Math.floor((sec % 3600) / 60)<10?"0"+Math.floor((sec % 3600) / 60):Math.floor((sec % 3600) / 60)}: 
            ${sec % 60<10?"0"+sec % 60:sec % 60}` }</h1>
            <div className="btns">
                <button className="btn1" onClick={()=>{setIsRunning(true)}}>Start</button>
                <button className="btn2" onClick={()=>{setIsRunning(false)}}>Stop</button>
                <button className="btn3" onClick={()=>{setIsRunning(false)
                    setSec(0)
                }}>Reset</button>
            </div>
        </div>
    )
}
export default Stopwatch