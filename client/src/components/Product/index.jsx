import React, { useContext, useEffect, useState } from 'react'
import { WishlistContext } from '../Context/WishlistContext'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Product = () => {
    const [data, setdata] = useState([])
    const {wishlist , handleAddWishlist}=useContext(WishlistContext)
   async function fetchData() {
        const res =await axios.get("http://localhost:7500/")
        setdata(res.data)
    }
    useEffect(() => {
      fetchData()
    }, [])
    
  return (
    <div>
      {data && data.map((item)=>(
        <ul key={item._id}>
            <li><img height={100} src={item.image} alt="" /></li>
            <li>{item.title}</li>
            <li>{item.price}</li>
            <button onClick={()=>handleAddWishlist(item)}>Wishlist</button>
            <Link to={`/${item._id}`}>Detail</Link>
        </ul>
      ))}
    </div>
  )
}

export default Product
