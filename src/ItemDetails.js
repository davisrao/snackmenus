import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/**
 * Component for details of food item. redirects to not found page on unfound item
 * 
 * props:
 * - items
 * 
 * state:
 * - none
 * 
 * context:
 * - none
 * 
 * App => ItemDetails
 */

function ItemDetails({ items, type }) {
  const { id } = useParams();

  const item = items.find(item => item.id === id);
  if (!item) return <Redirect to={`/${type}`} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default ItemDetails;
