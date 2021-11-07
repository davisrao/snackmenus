import React from "react";
import { render } from "@testing-library/react";
import ErrorMessage from "./ErrorMessage"



//run tests with npm test in terminal

describe("ErrorMessage Test", function () {
    it("matches snapshot", function () {
        const result = render(
            <ErrorMessage message="Error!"/>
        );
        expect(result).toMatchSnapshot();
    });
    it("renders with expected text", function () {
        const result = render(
            <ErrorMessage message="Error!"/>
        );

        expect(result.queryByText("Error!")).toBeInTheDocument();

    });
});