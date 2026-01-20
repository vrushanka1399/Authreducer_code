import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

const products = [
  { id: "p1", title: "iPhone", price: 80000 },
  { id: "p2", title: "Laptop", price: 60000 }
];

function Products() {

  const dispatch = useDispatch();

  return (
    <>
      <h3>Products</h3>
      {products.map(p => (
        <div key={p.id}>
          {p.title} - ?{p.price}
          <button onClick={() => dispatch(addToCart(p))}>
            Add To Cart
          </button>
        </div>
      ))}
    </>
  );
}

export default Products;
