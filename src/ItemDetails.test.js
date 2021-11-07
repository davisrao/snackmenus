import React from "react";
import { render } from "@testing-library/react";
import ItemDetails from "./ItemDetails";
import { snacks } from "./_testCommon.js"
import { MemoryRouter } from "react-router";


//run tests with npm test in terminal

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ id: "testid"}),
  }))

describe("ItemDetails Test", function () {
    it("matches snapshot", function () {
        const result = render(
            <ItemDetails items={snacks}/>
        );
        expect(result).toMatchSnapshot();
    });
    it("renders with expected text", function () {
        const result = render(
            <ItemDetails items={snacks}/>
        );

        expect(result.queryByText("testname")).toBeInTheDocument();

    });


});