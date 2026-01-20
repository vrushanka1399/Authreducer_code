import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./cartSlice";

const DUMMY_PRODUCTS = [
  { id: "p1", title: "iPhone", price: 80000 },
  { id: "p2", title: "Laptop", price: 60000 },
  { id: "p3", title: "Headphones", price: 2000 }
];

function App() {

  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  return (
    <div style={{ padding: 30 }}>

      {/* CART ICON */}
      <h2>
        🛒 My Cart ({cart.totalQuantity})
      </h2>

      <hr />

      {/* PRODUCTS */}
      <h3>Products</h3>

      {DUMMY_PRODUCTS.map(prod => (
        <div key={prod.id} style={{ marginBottom: 10 }}>
          <b>{prod.title}</b> - ₹{prod.price}

          <button
            style={{ marginLeft: 10 }}
            onClick={() =>
              dispatch(addToCart(prod))
            }
          >
            Add To Cart
          </button>
        </div>
      ))}

      <hr />

      {/* CART ITEMS */}
      <h3>Cart Items</h3>

      {cart.items.length === 0 && (
        <p>Cart is empty</p>
      )}

      {cart.items.map(item => (
        <div
          key={item.id}
          style={{
            border: "1px solid black",
            marginBottom: 10,
            padding: 10
          }}
        >
          <h4>{item.title}</h4>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button
            onClick={() =>
              dispatch(addToCart(item))
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
            style={{ marginLeft: 10 }}
          >
            -
          </button>
        </div>
      ))}

    </div>
  );
}

export default App;
