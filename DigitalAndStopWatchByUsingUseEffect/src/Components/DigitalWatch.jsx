import { useEffect, useState } from "react"     //useEffect act as lifeCycle methods in funational component
import "./DigitalWatch.css"

function Digitalwatch(){
    const[timer,setTimer]=useState(new Date())
   
    useEffect(()=>{
        let time=setInterval(()=>{
            setTimer(new Date())   
        },1000)

        return ()=>{
                clearInterval(time)
            }
    },[])

    return(
        <div className="digital">
            <h3>DIGITAL CLOCK</h3>
            <h1>{timer.toLocaleTimeString()}</h1>
        </div>
    )
}
export  default Digitalwatch
