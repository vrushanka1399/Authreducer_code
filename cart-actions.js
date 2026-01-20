import { replaceCart } from "./cartSlice";
import { showNotification } from "./uiSlice";


// ---------- SEND (PUT) ----------
export const sendCartData = (cart) => {

  return async (dispatch) => {

    dispatch(showNotification({
      status: "pending",
      title: "Sending...",
      message: "Sending cart data!"
    }));

    try {
      const res = await fetch("YOUR_API_URL", {
        method: "PUT",
        body: JSON.stringify(cart)
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      dispatch(showNotification({
        status: "success",
        title: "Success",
        message: "Cart saved successfully!"
      }));

    } catch {
      dispatch(showNotification({
        status: "error",
        title: "Error",
        message: "Sending cart failed!"
      }));
    }
  };
};


// ---------- FETCH (GET) ----------
export const fetchCartData = () => {

  return async (dispatch) => {

    dispatch(showNotification({
      status: "pending",
      title: "Fetching...",
      message: "Getting cart data!"
    }));

    try {
      const res = await fetch("YOUR_API_URL");

      if (!res.ok) {
        throw new Error("Failed");
      }

      const data = await res.json();

      dispatch(replaceCart({
        items: data.items || [],
        totalQuantity: data.totalQuantity || 0
      }));

      dispatch(showNotification({
        status: "success",
        title: "Success",
        message: "Cart loaded!"
      }));

    } catch {
      dispatch(showNotification({
        status: "error",
        title: "Error",
        message: "Fetching cart failed!"
      }));
    }
  };
};
   