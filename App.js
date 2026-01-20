import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Products from "./Products";
import Notification from "./Notification";
import Cart from "./Cart";

import { sendCartData, fetchCartData } from "./cart-actions"; 
import { toggleCart } from "./cartSlice";

let isInitial = true;

function App() {

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  const showCart = useSelector(state => state.cart.isVisible);

  // 🔹 GET cart data on page load
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  // 🔹 SEND cart data when cart changes
  useEffect(() => {

    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));

  }, [cart, dispatch]);

  return (
    <>
      {/* NOTIFICATION */}
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}

      <header style={{ padding: "20px", background: "#ccc" }}>
        <h2>Redux Cart App</h2>

        <button onClick={() => dispatch(toggleCart())}>
          My Cart ({cart.totalQuantity})
        </button>
      </header>

      {/* CART */}
      {showCart && <Cart />}

      {/* PRODUCTS */}
      <Products />
    </>
  );
}

export default App;
