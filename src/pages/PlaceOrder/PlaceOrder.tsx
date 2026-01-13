import "./PlaceOrder.css";
import { useStore } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalAmount } = useStore();

  return (
    <div className="place-order flex justify-between items-center gap-30 mt-20">
      <div className="delivery-info flex-3">
        <h3>Delivery Information</h3>
        <div className="input-fields grid grid-cols-2 gap-3 mt-4">
          <input className="input-item " type="text" placeholder="First name" />
          <input className="input-item " type="text" placeholder="Last name" />
          <input
            className="input-item col-span-2"
            type="mail"
            placeholder="Email address"
          />
          <input
            className="input-item col-span-2"
            type="text"
            placeholder="Street"
          />
          <input className="input-item " type="text" placeholder="City" />
          <input className="input-item " type="text" placeholder="State" />
          <input className="input-item " type="text" placeholder="Zip code" />
          <input className="input-item " type="text" placeholder="Country" />
          <input
            className="input-item col-span-2"
            type="phone"
            placeholder="Phone"
          />
        </div>
      </div>
      <div className="cart-totals flex-2 flex flex-col gap-5">
        <h3>Cart Totals</h3>
        <div className="total-details flex justify-between">
          <p>Subtotal</p>
          <p>${getTotalAmount()}</p>
        </div>
        <hr />
        <div className="total-details flex justify-between">
          <p>Delivery Fee</p>
          <p>${getTotalAmount() === 0 ? 0 : 15}</p>
        </div>
        <hr />
        <div className="total-details flex justify-between">
          <p>Total</p>
          <p>${getTotalAmount() === 0 ? 0 : getTotalAmount() + 15}</p>
        </div>
        <button>PROCEED TO PAYMENT</button>
      </div>
    </div>
  );
};

export default PlaceOrder;
