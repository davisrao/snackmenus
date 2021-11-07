import React from "react";
import { render } from "@testing-library/react";
import FoodMenu from "./FoodMenu";
import { snacks } from "./_testCommon.js"
import { MemoryRouter } from "react-router";


//run tests with npm test in terminal

describe("FoodMenu Test", function () {
    it("matches snapshot", function () {
        const result = render(
            <MemoryRouter>
            <FoodMenu snacks={snacks}/>
            </MemoryRouter>
        );
        expect(result).toMatchSnapshot();
    });
    it("renders with expected text", function () {
        const result = render(
            <MemoryRouter>
            <FoodMenu snacks={snacks}/>
            </MemoryRouter>
        );

        expect(result.queryByText("testname")).toBeInTheDocument();
        expect(result.queryByText("Snack Menu")).toBeInTheDocument();

    });


});