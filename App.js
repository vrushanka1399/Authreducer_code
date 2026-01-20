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

  const { totalQuantity, isVisible, items } = cart;

  // 🔹 FETCH cart data on page load
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  // 🔹 SEND cart data when cart changes
  useEffect(() => {

    if (isInitial) {
      isInitial = false;
      return;
    }

    // Prevent sending empty cart on first load
    if (items.length === 0) return;

    dispatch(sendCartData(cart));

  }, [cart, dispatch, items]);

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

      {/* HEADER */}
      <header style={{ padding: "20px", background: "#ccc" }}>
        <h2>Redux Cart App</h2>

        <button onClick={() => dispatch(toggleCart())}>
          My Cart ({totalQuantity})
        </button>
      </header>

      {/* CART */}
      {isVisible && <Cart />}

      {/* PRODUCTS */}
      <Products />
    </>
  );
}

export default App;
