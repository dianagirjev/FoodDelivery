import { type Dispatch, type SetStateAction } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
// import type { MenuItem } from "../../assets/assets";

type ExploreMenuProps = {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
};

const ExploreMenu = ({ category, setCategory }: ExploreMenuProps) => {
  return (
    <section className="explore-menu flex flex-col gap-5" id="explore-menu">
      <h2>Explore our menu</h2>
      <p>
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="explore-menu-list flex justify-between">
        {menu_list.map((menuItem, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === menuItem.menu_name ? "All" : menuItem.menu_name
                )
              }
              className="explore-menu-item flex flex-col items-center gap-4"
            >
              <img
                className={category === menuItem.menu_name ? "active" : ""}
                src={menuItem.menu_image}
                alt={menuItem.menu_name}
              />
              <h3>{menuItem.menu_name}</h3>
            </div>
          );
        })}
      </div>
      <hr />
    </section>
  );
};

export default ExploreMenu;
