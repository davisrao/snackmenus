import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

/** HomePage component
 * props:
 * - total drinks, total snacks (counts of total in DB)
 * 
 * state:
 * - none
 * 
 * context:
 * - none
 * 
 * HomePage => {}
 */

function Home({ totalDrinks, totalSnacks }) {
  console.log("made it to home page")
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to your favorite dive cafe!
            </h3>
            <h5>{`Home of ${totalDrinks} drink and ${totalSnacks} snack options.`}</h5>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
