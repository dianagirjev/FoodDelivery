import "./FoodItem.css";
import { assets, type FoodItemType } from "../../assets/assets";
import { useStore } from "../../context/StoreContext";

const FoodItem = ({ _id, name, price, description, image }: FoodItemType) => {
  const { cartItems, addToCart, removeFromCart } = useStore();

  return (
    <div className="food-item flex flex-col gap-4">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {!cartItems[_id] ? (
          <img
            className="add-product w-8"
            onClick={() => {
              addToCart(_id);
            }}
            src={assets.add_icon_white}
            alt="Add Icon"
          />
        ) : (
          <div className="food-item-counter flex justify-center gap-2 items-center">
            <img
              className="remove-product w-8"
              src={assets.remove_icon_red}
              alt="Red Icon"
              onClick={() => {
                removeFromCart(_id);
              }}
            />
            <p>{cartItems[_id]}</p>
            <img
              className="add-more-product w-8"
              src={assets.add_icon_green}
              alt="Green Icon"
              onClick={() => {
                addToCart(_id);
              }}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating flex justify-between items-center ">
          <h4>{name}</h4>
          <img src={assets.rating_starts} alt="Rating Stars" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
