import React from "react";
import { render } from "@testing-library/react";
import DrinkMenu from "./DrinkMenu";
import { drinks } from "./_testCommon.js"
import { MemoryRouter } from "react-router";


//run tests with npm test in terminal

describe("DrinkMenu Test", function () {
    it("matches snapshot", function () {
        const result = render(
            <MemoryRouter>
            <DrinkMenu drinks={drinks}/>
            </MemoryRouter>
        );
        expect(result).toMatchSnapshot();
    });
    it("renders with expected text", function () {
        const result = render(
            <MemoryRouter>
            <DrinkMenu drinks={drinks}/>
            </MemoryRouter>
        );
        expect(result.queryByText("Negroni")).toBeInTheDocument();
        expect(result.queryByText("Drink Menu")).toBeInTheDocument();

    });


});