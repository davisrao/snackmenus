import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import FoodMenu from "./FoodMenu";
import ItemDetails from "./ItemDetails";
import DrinkMenu from "./DrinkMenu";
import MenuItemForm from "./MenuItemForm";
import NotFound from "./NotFound"


/** App component
 * props:
 * - none
 * 
 * state:
 * - isLoading (T/F) 
 * - drinks (array of all drink objects)
 * - snacks (array of all snack objects)
 * 
 * context:
 * - none
 * 
 * App => {NavBar,Routes}
 */

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const [snacks, setSnacks] = useState([]);
  console.log("*App", isLoading, drinks, snacks)


  /**Effect running on initial load of data to query snack + drink data */
  useEffect(() => {
    async function getDrinks() {
      const drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
    }
    async function getSnacks() {
      const snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setIsLoading(false);
    }
    getDrinks();
    getSnacks();

  }, []);

  /**
   * Function to update data outside of useEffect
   * accepts type, and updates data that was edited
   * if type is snacks, update snacks, if type is drinks, 
   * update drinks
   */
  async function updateData(type) {
    if (type === "drinks") {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
    } else if (type === "snacks") {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
    }
  }

  /**
   * Function to handle form submission of new item addition
   * pings API with item details LIKE {name, description, recipe, serve} and accepts TYPE LIKE "snacks"/"drinks"
   * updates data on site of the according type
   */
  async function addMenuItem(itemDetails, type) {
    await SnackOrBoozeApi.addNewItem(itemDetails, type);
    await updateData(type);
  };

  if (isLoading) {
    return <p>Loading!</p>;
  }

  return (
    <div className="App container-fluid">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home totalDrinks={drinks.length} totalSnacks={snacks.length} />
            </Route>
            <Route exact path="/snacks">
              <FoodMenu snacks={snacks} />
            </Route>
            <Route exact path="/snacks/:id">
              <ItemDetails items={snacks} type="snacks" />
            </Route>
            <Route exact path="/drinks">
              <DrinkMenu drinks={drinks} />
            </Route>
            <Route exact path="/drinks/:id">
              <ItemDetails items={drinks} type="drinks" />
            </Route>
            <Route exact path="/add">
              <MenuItemForm addMenuItem={addMenuItem} />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
