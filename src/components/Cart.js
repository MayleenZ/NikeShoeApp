import { useContext } from "react";
import { ProductContext } from "../App";

function Header() {
  const productContextValue = useContext(ProductContext);
  const { cart } = productContextValue;
  let totalPrice = 0;
  const refreshPage = () => {
    window.location.reload(false)
  }
  return (
    <header>
      <div className = "receipt">
      <p>Cart: {cart.length > 0 ? cart.length : null}</p>
      <p>Receipt </p>
      {cart.map((shoe, id) => {
        if (shoe.price) {
          totalPrice += shoe.price;
        }
        return (
          <div className = "shoe-receipt">
              <p>{id}. {shoe.name} ${shoe.price} </p>
              <div>
              <img className = "all-shoes" src = {shoe.image} />
              </div>
          </div>
        );
      })}
      {totalPrice > 0 && <p id="total-price">Total Price: ${totalPrice}</p>}
      {/* Add a button to clear the shopping cart  */}
      <button id = "clear-btn" type = "submit" onClick = {refreshPage}>Clear Cart</button>
      </div>
    </header>
  );
}

export default Header;
