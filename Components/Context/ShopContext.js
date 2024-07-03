import React, { createContext, useState } from "react";
import all_product from '../Assets/all_product'
import CartItem from "../CartItem/CartItem";

export const ShopContext = createContext(null)
const getDefaltCart = () => {
    let cart = {}
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {
    const [cartItem, setcartItem] = useState(getDefaltCart())

    const addTocart = (itemId)=>{
        setcartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromcart = (itemId)=>{
        setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
     
    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cartItem)
        {
            if(cartItem[item]>0)
            {
                let itemInfo = all_product.find((product)=>product.id===Number(item))
                totalAmount += cartItem[item] * itemInfo.new_price 
            }
        }
        return totalAmount
    }

    const getTotalCartItems = ()=>{
        let totalItem = 0
        for(const item in cartItem)
        {
            if(cartItem[item]>0)
            {
                totalItem += cartItem[item]
            }
        }
        return totalItem
    }

    const contextvalue = {getTotalCartItems,getTotalCartAmount, all_product,cartItem,addTocart,removeFromcart }
    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider