import { useContext } from "react";
import Navbar from "../components/Navbar";
import { StoreContext } from "../context-and-reducer/StoreContext";
import BasketProduct from "../components/BasketProduct";

const Cart = () => {
  const { products, total } = useContext(StoreContext);
  return (
    <div>
      <Navbar />
      <div className="flex flex-row items-center justify-between mt-2 py-6 px-10 text-xl font-medium">
        <h3>Your Cart</h3>
        <p>Total ${total}</p>
      </div>
      {products.map((product, i) => (
        <BasketProduct 
          key={i} 
          item={product} 
        />
      ))}
    </div>
  );
};

export default Cart;
