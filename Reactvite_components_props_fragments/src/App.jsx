import Studentcard from "./components/Studentcard"
// import React from "react"    
import  { Fragment,Component } from "react"   //instead of import all from react this will import only need class



function App() {
  //day1
  // return (
  //   <div> 
      
  //       <h1>Hello World</h1>      {/*to return multiple lines there should in container like div etc  */}
  //       <h2>this is</h2>
  //  </div>
  // )

  //day2: topics:components:(class component,function component),propes
  // return(
  //   <div>
  //     {/* propes:passing data between one component to anothere component or parent to child and in the from of object(key values pairs)*/}  
                                        
  //     <Studentcard name="uppi" age={22} city="vizag" />    {/*  value should in string or in {} means js */}
  //     <Studentcard name="amosh" age={20} city="hyd" />
  //     <Studentcard name="kumar" age={24} city="vizag" />
  //   </div>
  // )

  

  //day3:  // day3 topics:fragments,how to handle boolean values in props by using ternary operator and detials(used to send values at a time in the from object )


  // return(
  //   // <React.Fragment> :this is used wrap all elements together without add extra node to dom
  //   //<Fragment>    //to reduce this we empty tag
  //   <> 
  //       {/* day3 :fragment,boolean values in props                                 */}
  //     <Studentcard name="uppi" age={22} city="vizag"  isStudent={true} />  
  //     <Studentcard name="amosh" age={20} city="hyd" isStudent={false} />
  //     <Studentcard name="kumar" age={24} city="vizag" isStudent={true} />
  //  </>
  //   // </Fragment> 
  //   // </React.Fragment>
  // )
 
  
  // topic :details(used to send all data at atime in the from object (details is object variable name))
  return(
    <div style={{display:"flex"}}>                       
      <Studentcard  details={{ name:"uppi", age:22, city:"vizag" , isStudent:true }} />    
      <Studentcard details={{ name:"Amosh", age:20, city:"hyd" , isStudent:false }} /> 
      <Studentcard details={{ name:"kumar", age:25, city:"vizag" , isStudent:true }} />   
    </div>
  )


}

export default App
