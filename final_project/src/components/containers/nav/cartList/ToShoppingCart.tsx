import { goToRightIcon } from "@/components/common/icons";
import { NavLink } from "react-router-dom";

type ToShopCartProps = {
  onClick: () => void;
};

const ToShoppingCart: React.FC<ToShopCartProps> = ({ onClick }) => (
  <NavLink to="/shoppingCart" onClick={onClick}>
    <h2>Go to shopping cart {goToRightIcon}</h2>
  </NavLink>
);

export default ToShoppingCart;
