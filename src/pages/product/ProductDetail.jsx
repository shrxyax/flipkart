import React, { use } from "react";
import products from './Products';
import './ProductDetail.css';
import { useParams } from "react-router-dom";
import NotFound from '../NotFound';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Navbar from '../../components/common/Navbar';
import cart from '../Cart/Carts';


export default function ProductDetail(){


  const {id}=useParams();

const product= products.find( (item)=> item.id=== Number(id));
const handleToCart= () =>{


  const cart=JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem= cart.find((item)=> item.id===product.id);

  if(existingItem)
  {
    existingItem.quantity+=1;
  }
  else
  {
    cart.push({...product,quantity:1});
  }

  localStorage.setItem("cart",JSON.stringify(cart));
  alert("Added to Cart");

}

console.log("product",product)
if(!product) return (<NotFound/>);
    return (
      <>
      <Header/>
      <Navbar/>
  <div className="product-page">
    <div className="product-left">
      <img src={product.image} alt={product.title} />
    </div>

    <div className="product-right">
      <h1 className="product-title">{product.title}</h1>

      <p className="product-price">{product.price}</p>

      <p className="product-desc">
        This is a high-quality product available at best price.
      </p>

      <button onClick={handleToCart} className="add-to-cart">
        Add to Cart
        
      </button>
    </div>
  </div>
  <Footer/>
  </>
);


}