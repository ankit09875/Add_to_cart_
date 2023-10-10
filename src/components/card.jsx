import React from 'react'
import "../styles/Shop.css"


const card = ({item, handleclick}) => {
  return (
    <div className='cards ui container'>
        <div className="image_box">
            <img src={item.img} alt="image" />
        </div>
      <div className="details">
        <p>{item.title}</p>
        <p>{item.author}</p>
        <p>Price - {item.price} Rs</p>
        <button onClick={()=>handleclick(item)}>Add to Cart</button>
      </div>
    </div>
  )
}

export default card;
