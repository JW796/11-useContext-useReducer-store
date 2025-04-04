import { useContext } from "react";
import Navbar from "../components/Navbar";
import { StoreContext } from "../context-and-reducer/StoreContext";

const Cart = () => {
  const { total } = useContext(StoreContext);
  return (
    <div>
      <Navbar />
      <div className="flex flex-row items-center justify-between mt-2 py-6 px-10 text-xl font-medium">
        <h3>Your Cart</h3>
        <p>Total ${total}</p>
      </div>
    </div>
  );
};

export default Cart;
