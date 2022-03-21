import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authentication";

const Header = () => {
  const dispatch = useDispatch();

  const authenticated = useSelector(
    (state) => state.authentication.isAuthenticated
  );

  const onLogoutHandler = () => {
    dispatch(authActions.logout());
  };

  const nav = (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={onLogoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authenticated && nav}
    </header>
  );
};

export default Header;
