import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./authSlice";
import { addExpense } from "./expenseSlice";
import { useState } from "react";

function App() {

  const dispatch = useDispatch();

  const auth = useSelector(state => state.auth);
  const expenses = useSelector(state => state.expenses.items);

  const [amount, setAmount] = useState("");

  const total = expenses.reduce(
    (acc, e) => acc + Number(e.amount), 0
  );

  const addHandler = () => {
    dispatch(addExpense({ amount }));
    setAmount("");
  };

  return (
    <div style={{ padding: "30px" }}>

      {/* AUTH */}
      {!auth.isAuthenticated && (
        <button
          onClick={() =>
            dispatch(login({ token: "abc123", userId: "u1" }))
          }
        >
          Login
        </button>
      )}

      {auth.isAuthenticated && (
        <button onClick={() => dispatch(logout())}>
          Logout
        </button>
      )}

      <hr />

      {/* EXPENSE */}
      {auth.isAuthenticated && (
        <>
          <h2>Add Expense</h2>

          <input
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />

          <button onClick={addHandler}>
            Add
          </button>

          <ul>
            {expenses.map((e, i) => (
              <li key={i}>₹{e.amount}</li>
            ))}
          </ul>

          <h3>Total: ₹{total}</h3>

          {/* PREMIUM */}
          {total > 10000 && (
            <button style={{ background: "gold" }}>
              Activate Premium
            </button>
          )}
        </>
      )}
    </div>
  );
}

export default App;
