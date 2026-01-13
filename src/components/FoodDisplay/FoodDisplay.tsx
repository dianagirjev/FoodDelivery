import "./FoodDisplay.css";
import { useStore } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

type FoodDisplayProps = {
  category: string;
};

const FoodDisplay = ({ category }: FoodDisplayProps) => {
  const { food_list } = useStore();
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-6">
        {food_list.map((foodItem, index) => {
          return (
            (category === foodItem.category || category === "All") && (
              <FoodItem
                key={index}
                _id={foodItem._id}
                name={foodItem.name}
                price={foodItem.price}
                description={foodItem.description}
                image={foodItem.image}
                category={foodItem.category}
              />
            )
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
