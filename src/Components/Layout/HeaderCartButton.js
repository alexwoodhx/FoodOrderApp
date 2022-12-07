import React, { useContext } from "react";
import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon.js";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return <React.Fragment>
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {numberOfItems}
      </span>
    </button>
  </React.Fragment>

 }

 export default HeaderCartButton;
