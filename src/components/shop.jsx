import React from 'react';
import productList from "../list";  // Change the import name
import "../styles/Shop.css"
import Card from './card'
import '../styles/phone.css'

const Shop = ({handleclick}) => {
    return (
        <section className='ui container'>
            {productList.map((item) => {
              return <Card item = {item} key={item.id} handleclick={handleclick}/>
               
            })}
        </section>
    );
}

export default Shop;
