// import React from "react"

import './Homepage.css';
import { Routes , Route } from "react-router-dom";
import Navbar from "./COMPONANT/NAVBAR/Navbar.jsx";
import Productdetails from './COMPONANT/ProductDetails/Productdetails.jsx'
import Cart from './COMPONANT/CART/Cart.jsx'
import Login from './COMPONANT/Login/Login.jsx'
import Footer from "./COMPONANT/FOOTER/Footer.jsx"
import Hero from './COMPONANT/HERO/Hero.jsx';
import ProductCard from './COMPONANT/PRODUCTCARD/ProductCard.jsx';



const Homepage = () => {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/product/:id' element={<Productdetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Hero/>
      <ProductCard/>
      <Footer />
    </>
  );
};

export default Homepage;
