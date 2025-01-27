import React from "react";
import './Products.css'
import Product from "./Product";

const Products = () => {
  return (
    <>
    <div className="products_row">
      <Product 
      key="1"
      id="1"
      title="Xbox Series Controller : Nocturnal Vapor Special Edition" 
      image="https://m.media-amazon.com/images/I/619XFKGW6jL._AC_SX679_.jpg"
      rating={4}
      price={54.99} />
       <Product 
      id="2"
      title="Huawei Fit 3 Aluminum Smart Watch, 1.82-Inch Size, Pink" 
      image="https://m.media-amazon.com/images/I/51J5NMoqK7L._AC_SX679_.jpg"
      rating={4}
      price={139.99} />
    </div>
    <div className="products_row">
    <Product 
      id="3"
      title="Razer Basilisk V3 Ergonomic Wired Gaming Mouse" 
      image="https://m.media-amazon.com/images/I/61WeAIZSmrL._AC_SY879_.jpg"
      rating={4}
      price={49.99} />
       <Product 
      id="4"
      title="Razer Ornata V3 Low Profile Gaming Keyboard" 
      image="https://m.media-amazon.com/images/I/715fbmjzRwL._AC_SX679_.jpg"
      rating={4}
      price={119.99} />
      <Product 
      id="5"
      title="Lenovo IdeaPad 1 15IAU7 Intel Core i5-1235U 8GB RAM 512GB SSD 15.6-Inch Full HD Laptop, Cloud Grey" 
      image="https://m.media-amazon.com/images/I/61TFeIzdtgL._AC_SX679_.jpg"
      rating={5}
      
      price={649.99} />
    </div>
    <div className="products_row">
    <Product 
      id="6"
      title="Razer Blackshark V2 X Gaming Headset" 
      image="https://m.media-amazon.com/images/I/71VjP2iOLBL._AC_SX679_.jpg"
      rating={4}
      price={46.99} />
    </div>
    
    </>
    
  );
};

export default Products;
