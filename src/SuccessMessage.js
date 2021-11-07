import React from "react";
import "./SuccessMessage.css"

/**
 * Component for details of food item 
 * props:
 * - items
 * - type of item rendering: string of drinks, snacks
 * 
 * state:
 * - none
 * 
 * context:
 * - none
 * 
 *  * MenuItemForm => SuccessMessage

 */


function SuccessMessage({ message}) {
  return (
          <div className="SuccessMessage">
              {message}
          </div>
  );
};

export default SuccessMessage;
