import { uiActions } from "../slices/ui";
import { cartActions } from "../slices/cart";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://udemy-http-d85fd-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Data Saved successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: `Sending data failed - ${error.message}`,
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Fetching",
        message: "Fetching cart data",
      })
    );

    const getRequest = async () => {
      const response = await fetch(
        "https://udemy-http-d85fd-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Error fetching cart data");
      }

      const responseData = await response.json();

      return responseData;
    };

    try {
      const data = await getRequest();
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          numItems: data.numItems,
        })
      );
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success",
          message: "Data fetched successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: `Fetching data failed - ${error.message}`,
        })
      );
    }
  };
};
