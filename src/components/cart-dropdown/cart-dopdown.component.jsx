import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./cart-dropdown.style";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropDownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </CartDropDownContainer>
  );
};

export default CartDropDown;
