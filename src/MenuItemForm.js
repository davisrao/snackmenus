import React, { useState } from "react";
import "./MenuItemForm.css"
import ErrorMessage from "./ErrorMessage";
import SuccessMessage from "./SuccessMessage";

/**
 * Form for adding a new menu item to the site 
 * props:
 * - addMenuItem (fxn on handle submit that lives on parent)
 * 
 * state:
 * - formData
 * - addedItemSuccess (tracks validation success/fail)
 * - formErrors (tracks errors in form)
 * 
 * context:
 * - none
 * 
 * App => MenuItemForm =>{errorMessage, successMessage}
 */

function MenuItemForm({ addMenuItem }) {
    const initialFormData = {
        type: "drinks",
        name: "",
        description: "",
        recipe: "",
        serve: ""
    }

    const [formData, setFormData] = useState(initialFormData);
    const [addedItemSuccess, setaddedItemSuccess] = useState(false);
    const [formErrors, setFormErrors] = useState(null)
    console.log("* Menu Item form", addMenuItem, formData)


    /** function to check form data. returns nothing if form data correct
     * throws error if form data invalid
     */
    function validateFormData(formData) {
        for (let input in formData) {
            if (!formData[input]) {
                throw Error
            }
        }
    }

    /** Update form input. */
    function handleChange(evt) {
        const { name, value } = evt.target
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }))
    }

    /** Validate input, call parent function and clear form. 
     * Returns error message on improper validation.
    */
    async function handleSubmit(evt) {
        console.log()
        evt.preventDefault();
        try {
            validateFormData(formData)
            await addMenuItem(formData, formData.type);
            setFormData(initialFormData);
            setFormErrors(false)
            setaddedItemSuccess(true);
        } catch (err) {
            console.log(err);
            if (err.message === undefined) {
                setFormErrors("Form submission error. Ensure all fields are completed and try again!")
            } else {
                setFormErrors(`Form error. Ensure all fields are completed. 
                                If you still have trouble, check the menu to see i
                                f your item already exists.`)
            }
        }
    }

    return (
        <div className="">
            <form className="MenuItemForm" onSubmit={handleSubmit}>
                {addedItemSuccess && <SuccessMessage message={`Your submission was added successfully.`} />}
                {formErrors && <ErrorMessage message={formErrors} />}
                <div className="form-group">
                    <label htmlFor="type"
                        className="d-inline-flex">Select Type:&nbsp;&nbsp;
                    </label>
                    <select id="MenuItemForm-type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="form-control form-control-sm d-inline-flex"
                    >
                        <option value={"drinks"}>Drink</option>
                        <option value={"snacks"}>Snack</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="name"
                        className="d-inline-flex">Name:&nbsp;&nbsp;
                    </label>
                    <input
                        id="MenuItemForm-name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        onChange={handleChange}
                        value={formData.name}
                        aria-label="Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description"
                        className="d-inline-flex">Description:&nbsp;&nbsp;
                    </label>
                    <input
                        id="MenuItemForm-description"
                        name="description"
                        className="form-control"
                        placeholder="Description"
                        onChange={handleChange}
                        value={formData.description}
                        aria-label="Description"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="recipe"
                        className="d-inline-flex">Recipe:&nbsp;&nbsp;
                    </label>
                    <textarea
                        id="MenuItemForm-recipe"
                        name="recipe"
                        className="form-control"
                        placeholder="Recipe"
                        onChange={handleChange}
                        value={formData.recipe}
                        aria-label="Recipe"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="serve"
                        className="d-inline-flex">Serving Instructions:&nbsp;&nbsp;
                    </label>
                    <textarea
                        id="MenuItemForm-serve"
                        name="serve"
                        className="form-control"
                        placeholder="Serve"
                        onChange={handleChange}
                        value={formData.serve}
                        aria-label="Serve"
                    />
                </div>

                <div className="form-group d-flex justify-content-between">
                    <button className="btn-primary rig btn btn-sm MenuItemForm-addBtn">
                        Add Item!
                    </button>
                </div>

            </form>
        </div>
    );
}

export default MenuItemForm;
