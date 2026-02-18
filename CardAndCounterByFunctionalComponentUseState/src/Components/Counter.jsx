import { useState } from "react";
import "./Counter.css"
//usestate:is used to store values which we want chamge repeatedly (works like state in component class )


function counter(){
    const[count,setCount]=useState(0);
    
    const incrbtn=()=>{
        setCount((pre)=>pre+1)
    }
    const decrbtn=()=>{
        if(count>0){
            setCount((pre)=>pre-1)
        }
    }
    const rstbtn=()=>{
        setCount(0)
    }

    return(
        <div>
            <h1>{count}</h1>
            <div className="btns">
                <button onClick={incrbtn}>Increment</button>
                <button onClick={rstbtn}>Reset</button>
                <button onClick={decrbtn}>Decrement</button>
            </div>
        </div>
    )
}
export default counter