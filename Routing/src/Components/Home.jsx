import  { React,useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function Home() {
    const [data,setData]=useState([])
    // componentDidMount :it runs after home page opens
    useEffect(()=>{
      async function fetchData(){
        // here fetching data will take time so we await untill it complete if await is used inside function then function declare async
        let res=await fetch('https://fakestoreapi.com/products')
        let datares= await res.json()   //this converts res into javascript array or object
        // console.log(datares)   
        setData(datares)
    }
    fetchData()
},[])

return (
    <div  style={styles.container}>
      {/* <h1>Home page</h1> */}
      <h1 style={styles.heading}>🛍️ Products</h1>
       <div style={styles.grid}>
      {
          data.map((item)=>(

            <Link to={`/products/${item.id}`}  key={item.id} style={styles.link}>
              <div style={styles.card}>

                <img src={item.image} alt={item.title}
                style={styles.image} />

                {/* <h1>{item.title}</h1> */}
                 <h3 style={styles.title}>
                {item.title.substring(0, 25)}...
              </h3>

                {/* <p>{item.description}</p> */}
                 <p style={styles.desc}>
                {item.description.substring(0, 60)}...
              </p>


                <h2 style={styles.price}>₹ {item.price}</h2>
            </div>
            </Link>
          ))
        }
        </div>

    </div>
  )
}

export default Home


/* ================= STYLES ================= */

const styles = {
  container: {
    padding: "40px",
    background: "#f4f6f9",
    minHeight: "100vh",
  },

  heading: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "32px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "25px",
  },

  link: {
    textDecoration: "none",
    color: "black",
    marginBottom:"20px"
  },

  card: {
    background: "white",
    padding: "15px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    height: "100%",
  },

  image: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
  },

  title: {
    fontSize: "16px",
    margin: "10px 0",
  },

  desc: {
    fontSize: "13px",
    color: "gray",
  },

  price: {
    color: "green",
    marginTop: "10px",
  },
};