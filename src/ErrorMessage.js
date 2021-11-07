import React from "react";
import "./ErrorMessage.css"

/**
 * Component for error message 
 * props:
 * - message (text)
 * 
 * state:
 * - none
 * 
 * context:
 * - none
 * 
 * MenuItemForm => ErrorMessage
 */


function ErrorMessage({ message }) {
  return (
    <div className="ErrorMessage">
      {message}
    </div>
  );
};

export default ErrorMessage;
