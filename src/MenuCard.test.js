import React from "react";
import { render } from "@testing-library/react";
import MenuCard from "./MenuCard";
import { snacks } from "./_testCommon.js"
import { MemoryRouter } from "react-router";


//run tests with npm test in terminal

describe("MenuCard Test", function () {
    it("matches snapshot", function () {
        const result = render(
            <MemoryRouter>
            <MenuCard items={snacks} type="snacks"/>
            </MemoryRouter>
        );
        expect(result).toMatchSnapshot();

    });
    it("renders properly with expected text", function () {
        const result = render(
            <MemoryRouter>
            <MenuCard items={snacks} type="snacks"/>
            </MemoryRouter>
        );
        expect(result.queryByText("123")).toBeInTheDocument();
        expect(result.queryByText("testname")).toBeInTheDocument();
    });

});