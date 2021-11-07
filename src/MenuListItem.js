import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import {
  ListGroupItem
} from "reactstrap";

/**
 * Component for items in list of snacks / drinks
 * 
 * props:
 * - item data {id,name,description,serve,recipe}
 * - type(snacks or drinks)
 * 
 * state:
 * - none
 * 
 * context:
 * - none
 * 
 * MenuCard => MenuListItem
 */


function MenuListItem({ item, type }) {
  return (
    <Link to={`/${type}/${item.id}`} key={item.id}>
      <ListGroupItem>{item.name}</ListGroupItem>
    </Link>
  );
}

export default MenuListItem;
