import { useContext } from "react";
import { ProductCartContainer, Img, Footer } from "./product-cart.style";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import { CartContext } from "../../contexts/cart.context";

const ProductCart = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCartContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <Footer>
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </Footer>
      <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCart;
