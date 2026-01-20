import { showNotification } from "./uiSlice";

export const sendCartData = cart => {

  return async dispatch => {

    dispatch(showNotification({
      status: "pending",
      title: "Sending...",
      message: "Sending cart data"
    }));

    try {
      await fetch("https://dummy-url.com/cart", {
        method: "PUT",
        body: JSON.stringify(cart)
      });

      dispatch(showNotification({
        status: "success",
        title: "Success",
        message: "Cart saved"
      }));

    } catch {
      dispatch(showNotification({
        status: "error",
        title: "Error",
        message: "Failed"
      }));
    }
  };
};
