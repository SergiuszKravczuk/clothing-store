import styled from "styled-components";
import { ReactComponent as ShoppingSvg } from "../../assets/shopping-bag.svg";

export const CartIconContainer = styled.div`
  width: 45px;
  position: relative;
  height: 45px;
  align-items: center;
  display: flex;
  cursor: pointer;
  justify-content: center;
`;
export const ItemCount = styled.span`
  position: absolute;
  font-weight: bold;
  font-size: 10px;
  bottom: 12px;
`;

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 24px;
  height: 24px;
`;
