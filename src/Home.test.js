import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home"



//run tests with npm test in terminal

describe("ErrorMessage Test", function () {
    it("matches snapshot", function () {
        const result = render(
            <Home totalDrinks={1} totalSnacks={2}/>
        );
        expect(result).toMatchSnapshot();
    });
    it("renders with expected text", function () {
        const result = render(
            <Home totalDrinks={1} totalSnacks={2}/>
        );

        expect(result.queryByText("Welcome to your favorite dive cafe!")).toBeInTheDocument();

    });
});