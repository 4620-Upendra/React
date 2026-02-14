import { Component } from "react";
import "./calculator.css"

class Calculator extends Component{

    state={result:""}

    opcal=(event)=>{
        // console.log(event)  //event(parameter name): is object cantains target key with button value
        // console.log(event.target)    //gives button element
        // console.log(event.target.textContent)   //gives innertext or textcontent inside of button

       const {result}=this.state
        this.setState({result:result+event.target.textContent})
        
    }

    opclr=()=>{
         this.setState({result:""})
    }

    cal=()=>{
        this.setState({result:String(eval(this.state.result))})
        //eval method:gives number type output and if perfrom any operation it gives nan)not a number)
    }

    opdel=()=>{
        const {result}=this.state
        this.setState({result:result.substring(0,result.length-1)})
    }
    render(){
        const{result}=this.state
        return(
            <div className="maindiv">
                <h1 className="heading">Calculator</h1>
            <div className="cal">
                <p>{result}</p>
                <div>
                    <button onClick={this.opclr} style={{backgroundColor:" rgb(100, 193, 100)", color:"white"}}>AC</button>
                    <button onClick={this.opdel} style={{backgroundColor:" rgb(100, 193, 100)", color:"white"}}>DEL</button>
                    <button onClick={this.opcal} style={{backgroundColor:" rgb(100, 193, 100)", color:"white"}}>%</button>
                    <button onClick={this.opcal} style={{backgroundColor:" rgb(152, 152, 218)", color:"white"}}>/</button>
                </div>
                <div>
                    <button onClick={this.opcal}>1</button>
                    <button onClick={this.opcal}>2</button>
                    <button onClick={this.opcal}>3</button>
                    <button onClick={this.opcal} style={{backgroundColor:" rgb(152, 152, 218)", color:"white"}}>*</button>
                </div>
                <div>
                    <button onClick={this.opcal}>4</button>
                    <button onClick={this.opcal}>5</button>
                    <button onClick={this.opcal}>6</button>
                    <button onClick={this.opcal} style={{backgroundColor:" rgb(152, 152, 218)", color:"white"}}>-</button>
                </div>
                <div>
                    <button onClick={this.opcal}>7</button>
                    <button onClick={this.opcal}>8</button>
                    <button onClick={this.opcal}>9</button>
                    <button onClick={this.opcal} style={{backgroundColor:" rgb(152, 152, 218)", color:"white"}}>+</button>
                </div>
                <div>
                    <button onClick={this.opcal}>0</button>
                    <button onClick={this.opcal}>00</button>
                    <button onClick={this.opcal}>.</button>
                    <button onClick={this.cal} style={{backgroundColor:" rgb(100, 193, 100)", color:"white"}}>=</button>
                </div>
                
            </div>
        </div>
        )
    }
}

export default Calculator