import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" autoComplete="given-name"/>
          <input type="text" placeholder="Last Name" autoComplete="family-name"/>
        </div>
        <input type="email" placeholder="Email" autoComplete="email"/>
        <input type="text" placeholder="Street Address" autoComplete="street-address"/>
        <div className="multi-fields">
          <input type="text" placeholder="City" autoComplete="address-level2"/>
          <input type="text" placeholder="State" autoComplete="address-level1"/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" autoComplete="postal-code"/>
          <input type="text" placeholder="Country" autoComplete="country-name"/>
        </div>
        <input type="text" placeholder="Phone" autoComplete="tel"/>
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button disabled>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
