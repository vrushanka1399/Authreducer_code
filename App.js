import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./authSlice";

function App() {
  const isAuthenticated = useSelector(
    state => state.auth.isAuthenticated
  );

  const dispatch = useDispatch();

  // LOGGED OUT SCREEN
  if (!isAuthenticated) {
    return (
      <div style={styles.container}>
        <h2>Login</h2>

        <input type="text" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />

        <button
          onClick={() => dispatch(login())}
          style={styles.loginBtn}
        >
          Login
        </button>
      </div>
    );
  }

  // LOGGED IN SCREEN
  return (
    <div style={styles.container}>
      <h1>Welcome User ??</h1>
      <p>You are logged in successfully</p>

      <button
        onClick={() => dispatch(logout())}
        style={styles.logoutBtn}
      >
        Logout
      </button>
    </div>
  );
}

export default App;

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px"
  },
  loginBtn: {
    padding: "10px 20px",
    background: "green",
    color: "white",
    border: "none"
  },
  logoutBtn: {
    padding: "10px 20px",
    background: "red",
    color: "white",
    border: "none"
  }
};
