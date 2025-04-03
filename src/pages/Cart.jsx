import { useContext } from "react";
import Navbar from "../components/Navbar";
import { StoreContext } from "../context-and-reducer/StoreContext";

const Cart = () => {
  const { total } = useContext(StoreContext);
  return (
    <div>
      <Navbar />
      <div>
        <h3>Your Cart</h3>
        <p>Total ${total}</p>
      </div>
    </div>
  );
};

export default Cart;
