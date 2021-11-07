import React from "react";
import { render } from "@testing-library/react";
import MenuItemForm from "./MenuItemForm";

//run tests with npm test in terminal

describe("MenuItemForm Test", function () {
    it("matches snapshot", function () {
        const result = render(
            <MenuItemForm addMenuItem={() => null} />
        );
        expect(result).toMatchSnapshot();

    });
    it("renders properly with expected text", function () {
        const result = render(
            <MenuItemForm addMenuItem={() => null} />
        );
        console.log(result)
        expect(result.queryByText("Serving Instructions:")).toBeInTheDocument();
    });

});