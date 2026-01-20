import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "./cartSlice";

function App() {

  const dispatch = useDispatch();
  const isCartVisible = useSelector(
    state => state.cart.isVisible
  );

  return (
    <div style={{ padding: "30px" }}>
      <button
        onClick={() => dispatch(toggleCart())}
      >
        MyCart
      </button>

      {isCartVisible && (
        <div style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid black"
        }}>
          <h3>🛒 My Cart</h3>
          <p>Your cart items will appear here</p>
        </div>
      )}
    </div>
  );
}

export default App;
