import React from "react";      //to inherite component class

class Studentcard extends React.Component{
   
    
 styles={border:"2px solid black",
    color:"red" ,
    padding:"10px",
    display: "flex",
  flexDirection: "column",
  width:"300px",
  margin: "20px"
    }
    render(){       //render method: returns jsx code and  jsx is nothing but it allows to  write html code in js
                   // in {} we will write js code

                // console.log(this.props)  //values get from anothere component is stored in propes in the from object but
                //    this.props.name="siva"   //but in propes we can only read cannot change values it give error
       
                // return(       
        //     <div style={{border:"1px solid black"}}>
        //         <h1> Name: {this.props.name}</h1>
        //         <h1>Age: {this.props.age}</h1>
        //         <h1>City: {this.props.city}</h1>
        //     </div>
        // )


        // day3 topics:fragments,how to handle boolean values in props by using ternary operator and deatials(used to send values at a time in the from object )
      
        // return(
        //     <div style={this.styles}>
        //         <h1>Name:{this.props.name}</h1>
        //         <h1>age:{this.props.age}</h1>
        //         <h1>city:{this.props.city}</h1>
        //         {/* handling boolean values by using ternary operator */}
        //         <h1>isStudent:{this.props.isStudent?"true":"false"}</h1>
        //     </div >
        // )


        // topic:details in props
        console.log(this.props.details)
         return(
            <div style={this.styles}>
                <h1>Name:{this.props.details.name}</h1>
                <h1>age:{this.props.details.age}</h1>
                <h1>city:{this.props.details.city}</h1>
                {/* handling boolean values by using ternary operator */}
                <h1>isStudent:{this.props.isStudent?"true":"false"}</h1>
            </div >
        )
    }

}

export default Studentcard