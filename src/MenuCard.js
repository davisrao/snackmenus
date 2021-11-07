import React from "react";
import "./Menu.css";
import {
    Card,
    ListGroup,
    CardTitle
} from "reactstrap";
import MenuListItem from "./MenuListItem";
import { capitalizeWord } from "./utils";

/**
 * Component for MenuCard for food / drink overall menus.
 * props:
 * - items (array of objects for all items in category)
 * - type (category that items belong to)
 * 
 * state:
 * - none
 * 
 * context:
 * - none
 * 
 * MenuCard => {}
 */

function MenuCard({ items, type }) {
    // const title = type.charAt(0).toUpperCase() + type.slice(1, type.length - 1)
    const title = capitalizeWord(type);
    return (
        <section>
            <Card >
                <CardTitle className="font-weight-bold text-center">
                    {`${title} Menu`}
                </CardTitle>
                <ListGroup>
                    {items.map(item => (
                        <MenuListItem key={item.id} item={item} type={type} />
                    ))}
                </ListGroup>
            </Card>
        </section>
    );
}

export default MenuCard;
