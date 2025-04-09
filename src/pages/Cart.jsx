import { useContext } from "react";
import Navbar from "../components/Navbar";
import { StoreContext } from "../context-and-reducer/StoreContext";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const { products, total } = useContext(StoreContext);
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Navbar />
      <div className="flex flex-row items-center justify-between mt-2 py-6 px-10 text-xl font-medium">
        <h3>Your Cart</h3>
        <p>Total ${total}</p>
      </div>
      {products.map((product, i) => (
        <CartProduct 
          key={i} 
          item={product} 
        />
      ))}
    </div>
  );
};

export default Cart;
