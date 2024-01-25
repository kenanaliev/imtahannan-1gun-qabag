import React, { createContext, useState } from "react";

export const WishlistContext = createContext();
function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  function handleDelete(item) {
    setWishlist(wishlist.filter((x) => x._id !== item._id));
  }

  function handleAddWishlist(item) {
    const wishlistProduct = wishlist.find((x) => x._id === item._id);
    if (wishlistProduct) {
      setWishlist(wishlist.filter((x) => x._id !== item._id));
    } else {
      setWishlist([...wishlist, item]);
    }
  }
  


  const data = {
    handleAddWishlist,
    wishlist,
    setWishlist,
    handleDelete
  };

  return (
    <WishlistContext.Provider value={data}>{children}</WishlistContext.Provider>
  );
}

export default WishlistProvider;
