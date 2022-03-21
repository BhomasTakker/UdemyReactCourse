import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, fetchCartData } from "./store/actions/cart-actions";

let initialLoad = true;

function App() {
  const dispatch = useDispatch();
  const cartShowing = useSelector((state) => state.ui.showCart);

  const cart = useSelector((state) => state.cart);
  const notifications = useSelector((state) => state.ui.notification);

  //two, TWO, useEffects! I did not know this!!
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);
  //dispatch data updates when redux updates
  //Pretty nice way - at the moment it does wipe any data because initialises with an empty cart :() <- initialLoad cheap and easy sort!
  useEffect(() => {
    if (initialLoad) {
      initialLoad = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notifications && <Notification {...notifications} />}
      <Layout>
        {cartShowing && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
