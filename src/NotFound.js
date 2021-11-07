import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import { Card } from "reactstrap";

/**
 * Component for not found page
 * props:
 * - 
 * 
 * state:
 * - none
 * 
 * context:
 * - none
 * 
 *  * App => NotFound

 */


function NotFound() {
  return (
    <div className="NotFound">
      <Card>
        <p>Sorry! That page doesn't exist.</p>
        <Link className="NotFound-Link" to="/">Click here to head back home</Link>
      </Card>
    </div>
  );
};

export default NotFound;
