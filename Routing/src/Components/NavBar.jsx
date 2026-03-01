import React from 'react'
import { Link, NavLink } from "react-router-dom"

function NavBar() {
    //  function 
    const style = (active) => {
        // console.log(active)    //it is object
        // console.log(active.isActive)  //isActive key in active object
        let { isActive } = active // object destructuring
        return {
            // textDecoration:"None",
            // color:isActive?"Green":"black",


            textDecoration: "none",
            fontSize: "20px",  // ✅ Change font size here
            fontWeight: isActive ? "bold" : "500",
            color: isActive ? "white" : "#333",
            backgroundColor: isActive ? "#007bff" : "transparent",
            padding: "8px 16px",
            borderRadius: "20px",
            transition: "all 0.3s ease",
        }
    }




    return (
        // <div style={{display:'flex',gap:"20px"}}>
        <div style={styles.container}>
            {/* here Link tag is used to change URL path when clicked then routes path element is rendered without reloading */}
            {/* In React Router, the <Link /> component is used for navigation between pages without reloading the page. */}
            {/* <Link to="/" style={{textDecoration:"None"}}>Home</Link>       
      <Link to="/about"style={{textDecoration:"None"}} >About</Link>
      <Link to="/Contact" style={{textDecoration:"None"}}>Home</Link> */}

            {/* here NavLink is also works like Link Component but it returns Active Class object in that object there is key (isActive) it containes boolean and if path is clicked isActive:true otherwise false   */}
            {/* AI :NavLink is used for navigation like Link, but it provides an extra feature: 
         It automatically adds active styling when the route matches the current URL. 👉 It is mostly used in navbar menus. */}
            <NavLink to="/" style={style}>Home</NavLink>
            <NavLink to="/about" style={style} >About</NavLink>
            <NavLink to="/contact" style={style}>Contact</NavLink>
        </div>
    )
}

export default NavBar

const styles = {
    container: {
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        gap: "30px",
        padding: "15px 0",
        background: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
    },
};