import React from 'react'
import Navbar from '../components/Navbar';
import { storeData } from '../Data';
import Product from "../components/Product";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl text-center font-semibold mt-2 py-4">useContext + useReducer Store</h1>
      <h2 className="text-4xl tracking-wide py-4 pl-8">New In Stock</h2>
      {storeData.map((item, i ) => 
        <Product 
        key={i}
        item={item}
        />
      )}
    </div>
  );
}

export default Home
