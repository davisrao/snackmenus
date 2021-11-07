import React from "react";
import { render } from "@testing-library/react";
import NotFound from "./NotFound"
import { MemoryRouter } from "react-router-dom";

//run tests with npm test in terminal

describe("SuccessMessage Test", function () {
    it("matches snapshot", function () {
        const result = render(
            <MemoryRouter>
            <NotFound />
            </MemoryRouter>
        );
        expect(result).toMatchSnapshot();
    });
    it("renders with expected text", function () {
        const result = render(
            <MemoryRouter>
            <NotFound />
            </MemoryRouter>
        );
        console.log(result);
        expect(result.queryByText("Click here to head back home")).toBeInTheDocument();

    });
});