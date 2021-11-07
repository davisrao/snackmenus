import axios from "axios";
import { getIdFromName } from "./utils";

const BASE_API_URL = "http://localhost:5000";

/*
* API helper class for getting snack and drink data
*/

class SnackOrBoozeApi {

  /**
   * Request for all snacks in DB.
   * returns array of obj with snack data LIKE:
   * [
   *  {id,name,description,recipe,serve},
   *  {id,name,description,recipe,serve}
   * ]
   */
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  /**
   * Request for all drinks in DB.
   * returns array of obj with snack data LIKE:
   * [
   *  {id,name,description,recipe,serve},
   *  {id,name,description,recipe,serve}
   * ]
   */
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }


  /**
   * Post request for a new item in DB
   * Accepts item details LIKE: {name,description,recipe,serve} AND type like "drink" OR "snack"
   * posts to DB and returns snack or drink posted including ID
   */

  static async addNewItem(itemDetails, type) {
    const id = getIdFromName(itemDetails.name);
    // const nameToId = itemDetails.name.toLowerCase().split(" ").join("-")
    const data = {
      ...itemDetails,
      id: id
    }

    const result = await axios.post(`${BASE_API_URL}/${type}`, data);
    return result.data;
  }

}

export default SnackOrBoozeApi;
