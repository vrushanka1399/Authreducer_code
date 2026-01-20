import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "./expenseSlice";
import { login, logout } from "./authSlice";
import { useState } from "react";

function App() {

  const dispatch = useDispatch();
  const expenses = useSelector(state => state.expenses.items);
  const auth = useSelector(state => state.auth);

  const [amount, setAmount] = useState("");

  const total = expenses.reduce((acc, item) => acc + Number(item.amount), 0);

  const addHandler = () => {
    dispatch(addExpense({ amount }));
    setAmount("");
  };

  return (
    <div style={{ padding: 30 }}>

      {/* AUTH */}
      {!auth.isLoggedIn && (
        <button onClick={() => 
          dispatch(login({ token: "dummy123", userId: "u1" }))
        }>
          Login
        </button>
      )}

      {auth.isLoggedIn && (
        <button onClick={() => dispatch(logout())}>
          Logout
        </button>
      )}

      {/* EXPENSE */}
      {auth.isLoggedIn && (
        <>
          <h2>Add Expense</h2>

          <input
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />

          <button onClick={addHandler}>Add</button>

          <ul>
            {expenses.map((e, i) => (
              <li key={i}>{e.amount}</li>
            ))}
          </ul>

          <h3>Total = ?{total}</h3>

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
