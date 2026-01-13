import "./Cart.css";
import { useStore } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalAmount } = useStore();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-titles grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-titles cart-item grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center mt-4">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className="remove-item"
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </p>
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>
      <div className="cart-bottom flex justify-between items-center mt-15">
        <div className="cart-totals flex-1 flex flex-col gap-5">
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
          <button onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promo flex-1 flex flex-col gap-4">
          <p>If you have a promo code, Enter it here</p>
          <div className="promo-code flex justify-between gap-4">
            <input className="flex-3" type="text" placeholder="Promo Code" />
            <button className="flex-1 cursor-pointer">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
