import React, { useContext } from 'react'
import { WishlistContext } from '../../../components/Context/WishlistContext'
import Navbar from '../../Navbar'


function Wishlist() {
  const {wishlist , handleAddWishlist}=useContext(WishlistContext)
  return (
    <div>
        <Navbar></Navbar>
      { wishlist && wishlist.map((item)=>(
        <div>
          <p>{item.name}</p>
          <p>{item.price}$</p>
          <img src={item.image} height={100} alt="" />
          <button onClick={()=>handleAddWishlist(item)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default Wishlist
