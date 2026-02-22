import React, { useState } from 'react'

function Browserhistroy(props) {
    const [data, setData] = useState(props.data)
    const [searchvalue, setSearchvalue] = useState("")

    // Handle Search
    const handlesearch = (event) => {
        setSearchvalue(event.target.value)
    }

    // Filter Based on Search
    const filteredData = data.filter((item) => {
        return item.name.toLowerCase().includes((searchvalue.toLowerCase()))
    });

    // Handle Delete
    const handleDelete = (id) => {
        let newdata = data.filter(item => {
            return item.id != id
        })
        // console.log(newdata)
        setData(newdata)
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Browser History</h1>

            <input
                type="search"
                placeholder="Search history..."
                value={searchvalue}
                onChange={handlesearch}
                style={styles.search}
            />

            <div style={styles.sub}>
                {filteredData.length > 0 ? (
                    filteredData.map(item => (
                        <div key={item.id} style={styles.card}>

                            <div style={styles.leftSection}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={styles.image}
                                />

                                <div>
                                    <h3 style={styles.title}>{item.name}</h3>
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={styles.link}
                                    >
                                        {item.url}
                                    </a>
                                </div>
                            </div>

                            <button
                                style={styles.deleteBtn}
                                onClick={() => handleDelete(item.id)}
                            >
                                Delete
                            </button>
                        </div>
                    ))
                ) : (
                    <p style={styles.noData}>No History Found</p>
                )}
            </div>
        </div>
    

// written by me

//         <div>
//             <h1>Browser History</h1>
//             <input type='search' placeholder="Search history..."  onChange={handlesearch} />

//  <div className="sub">
//                 {filteredData.length>0?(
//                     filteredData.map(item => (
//                     <div key={item.id} style={{display:"flex"}}>
//                     <img src={item.image} style={{width:"80px"}} />
//                    <div>
//                     <h3>{item.name}</h3>
//                     <a href={item.url}>{item.url}</a>
//                    <button style={{marginLeft:"10px"}} onClick={()=>handleDelete(item.id)}>Delete</button>
//                    </div>
//                     </div>
//                 ))
//                 ):(
//                     <p>no histroy found</p>
//                 )}
//             </div>
//         </div>
    )
}


 const styles = {
  container: {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif"
  },
  heading: {
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "30px"
  },
  search: {
    width: "100%",
    padding: "14px",
    fontSize: "18px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "25px"
  },
  sub: {
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f7f7f7"
  },
  leftSection: {
    display: "flex",
    alignItems: "center",
    gap: "20px"
  },
  image: {
    width: "70px",
    height: "70px",
    objectFit: "contain"
  },
  title: {
    margin: "0",
    fontSize: "22px"
  },
  link: {
    fontSize: "16px",
    color: "#0066cc",
    textDecoration: "none"
  },
  deleteBtn: {
    fontSize: "16px",
    padding: "8px 16px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#ff4d4d",
    color: "white",
    cursor: "pointer"
  },
  noData: {
    textAlign: "center",
    fontSize: "18px",
    color: "gray"
  }
}

export default Browserhistroy

