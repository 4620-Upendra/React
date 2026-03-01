import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleProduct() {
    const[data,setData]=useState(null)

    //useParams used to get id form url path dynamicly
    const { id } = useParams();

    useEffect(() => {
        async function fectData() {
            try {
                //this fetch that particular id product
                let res = await fetch('https://fakestoreapi.com/products/' + id)
                let jsonres = await res.json()
                // console.log(jsonres)
                setData(jsonres)
            } catch (err) {
                console.log(err)
            }
        }
        fectData()
    }, [])

     if (!data) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }


    return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src={data.image}
          alt={data.title}
          style={styles.image}
        />

        <div>
          <h1 style={styles.title}>{data.title}</h1>
          <p style={styles.desc}>{data.description}</p>
          <h2 style={styles.price}>₹ {data.price}</h2>
        </div>
      </div>
    </div>
  );


  //written by me

    // return (
    //     <div>
    //        <img src={data.image} alt="" />
    //        <h1>{data.title}</h1>
    //        <p>{data.description}</p>
    //        <h2>Price:{data.price}</h2>
    //     </div>
    // )
}

export default SingleProduct


/* ================= STYLES ================= */

const styles = {
  container: {
    padding: "100px 20px",
    display: "flex",
    justifyContent: "center",
    background: "#f4f6f9",
    minHeight: "100vh",
  },

  card: {
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    maxWidth: "800px",
    display: "flex",
    gap: "40px",
    alignItems: "center",
  },

  image: {
    width: "250px",
    objectFit: "contain",
  },

  title: {
    fontSize: "24px",
    marginBottom: "15px",
  },

  desc: {
    color: "gray",
    marginBottom: "15px",
  },

  price: {
    color: "green",
  },
};