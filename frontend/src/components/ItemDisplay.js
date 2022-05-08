import React from 'react';
import { CartProvider } from 'react-use-cart';
import ItemCard from './ItemCard';
import productData from './data';
import data from './data';
import Cart from './Cart';

export const ItemDisplay = () => {
  return (
    <>
      <CartProvider><br/>
        <h1 className='text-center mt-3'> All Items </h1> 

        
            <div className='col-lg-3 mt-4 mb-4 searchf'>
              <input className='form-control' type='search' placeholder='Search' name='searchTerm' />
            </div>
          

        <section className='py-4 container'>
          <div className='row justify-content-center'>
            {data.productData.map((item, index) => {
              return (
                <ItemCard
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  price={item.price}
                  item={item}
                  key={item.index}
                />
              )
            })}
          </div>
        </section>

        <Cart />
      </CartProvider>
    </>
  )
};

export default ItemDisplay;
