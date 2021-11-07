import React from "react";
import { render } from "@testing-library/react";
import MenuListItem from "./MenuListItem";
import { snacks } from "./_testCommon.js"
import { MemoryRouter } from "react-router-dom";

//run tests with npm test in terminal

describe("MenuItemForm Test", function () {
    it("matches snapshot", function () {
        const result = render(
            <MemoryRouter>
                <MenuListItem item={snacks[0]} type="snacks" />
            </MemoryRouter>
        );
        expect(result).toMatchSnapshot();

    });
    it("renders properly with expected text", function () {
        const result = render(
            <MemoryRouter>
                <MenuListItem item={snacks[0]} type="snacks" />
            </MemoryRouter>
        );
        console.log(result)
        expect(result.queryByText("testname")).toBeInTheDocument();
    });
});