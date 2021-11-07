import React from "react";
import "./Menu.css";
import MenuCard from "./MenuCard"

/** DrinkMenu component
 * props:
 * - drinks (array of all drink objects)
 * 
 * state:
 * - none
 * 
 * context:
 * - none
 * 
 * DrinkMenu => MenuCard
 */

function DrinkMenu({ drinks }) {
    console.log("* DrinkMenu", drinks)
    return (
        <section className="col-md-4">
            <MenuCard items={drinks} type="drinks" />
        </section>
    );
}

export default DrinkMenu;
