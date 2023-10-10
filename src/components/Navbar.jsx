import React from 'react'
import { BsCartPlusFill } from 'react-icons/bs';
import '../styles/Navbar.css';
import '../styles/phone.css'

const Navbar = ({size,setShow}) => {
  return (
   <nav className='ui cotainer'>
    <div className="nav_box">
        <span className='my_shop' onClick={()=> setShow(true)}>DxO shop</span>
        <div className="cart" onClick={()=> setShow(false)}>
            <span>
                <i className="icon">
                    <BsCartPlusFill/>
                </i>
            </span>
            <span>{size}</span>
        </div>
    </div>
   </nav>
  )
}

export default Navbar
