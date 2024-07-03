import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Components/Context/ShopContext'
import './CSS/ShopCategory.css'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="banner" />
      <div className="shopcategory-index-sort">
        <p>
          <span>Showing 1-12  </span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="icon" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else{
            return null
          }
        })}
      </div>
      <div className="shopcategory-loader">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
