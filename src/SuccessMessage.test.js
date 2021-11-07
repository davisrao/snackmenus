import React from "react";
import { render } from "@testing-library/react";
import SuccessMessage from "./SuccessMessage"

//run tests with npm test in terminal

describe("SuccessMessage Test", function () {
    it("matches snapshot", function () {
        const result = render(
            <SuccessMessage message="Success!"/>
        );
        expect(result).toMatchSnapshot();
    });
    it("renders with expected text", function () {
        const result = render(
            <SuccessMessage message="Success!"/>
        );
        console.log(result);
        expect(result.queryByText("Success!")).toBeInTheDocument();

    });
});