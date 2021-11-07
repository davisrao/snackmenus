import React from "react";
import "./Menu.css";
import MenuCard from "./MenuCard"

/** FoodMenu component
 * props:
 * - snacks (array of all snacks objects)
 * 
 * state:
 * - none
 * 
 * context:
 * - none
 * 
 * FoodMenu => MenuCard
 */
function FoodMenu({ snacks }) {
    console.log("* FoodMenu", snacks)
    return (
        <section className="col-md-4">
            <MenuCard items={snacks} type="snacks" />
        </section>
    );
}

export default FoodMenu;
