import React, { useEffect, useState } from 'react'
import '../styles/Cart.css';
const Cart = ({ cart, setCart, handleChange }) => {

    const [price, setPrice] = useState(0)

    const handleRemove = (id) => {
        const arr = cart.filter((item)=> item.id !== id);
        setCart(arr);
    }

    const handlePrice = () =>{
        let mrp = 0;
        cart.map((item)=>{
            mrp+= item.amount * item.price;
        });
        setPrice(mrp);
    }

    useEffect(()=>{
        handlePrice()
    })

    return (
        <article>
            {
                cart?.map((item) => (  //those item are coming from cart
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                            <img src={item.img} alt="image" />
                            <p>{item.title}</p>
                        </div>
                        <div className='btn'>
                            <button className='btn1' onClick={()=>handleChange(item ,+1)} > + </button>
                            <button className='btn2' onClick={()=>handleChange(item ,-1)} > - </button>
                        </div>
                        <div>
                            <span  className='price'>&#8377;{item.price}</span>
                            <button className='btn3' onClick={() => handleRemove(item.id)}>Remove</button>
                        </div>
                    </div>
                ))
            }
            <div className="total">
                <span>Total price of your cart </span>
                <span> Rs {price}</span>
            </div>
            <div className="placeorder">
                <button className='btn_place'>PLACE ORDER</button>
            </div>
        </article>

    )
}

export default Cart
