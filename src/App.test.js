import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import axios from "axios";
import { drinks, snacks } from "./_testCommon.js"

const WELCOME_TEXT = "Welcome to your favorite dive cafe!";

jest.mock("axios")

describe("Cafe routes", function () {

    afterEach(() => {
        jest.clearAllMocks();
    });

    it("renders without crashing", async function () {
        axios.get.mockResolvedValueOnce({ data: drinks });
        axios.get.mockResolvedValueOnce({ data: snacks });
        const { getByText } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        expect(axios.get).toHaveBeenCalledWith(`http://localhost:5000/drinks`);
        expect(axios.get).toHaveBeenCalledWith(`http://localhost:5000/snacks`);
        await waitFor(() => getByText(WELCOME_TEXT));

    });

    it("renders the home snapshot", async function () {
        axios.get.mockResolvedValueOnce({ data: drinks });
        axios.get.mockResolvedValueOnce({ data: snacks });
        const { asFragment, getByText } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        await waitFor(() => getByText(WELCOME_TEXT));
        expect(axios.get).toHaveBeenCalledTimes(2);
        getByText(/2 snack/)
        getByText(/2 drink/)
        expect(asFragment()).toMatchSnapshot();
    });

    it("renders a loading message before the data is loaded", async function () {
        axios.get.mockResolvedValueOnce({ data: drinks });
        axios.get.mockResolvedValueOnce({ data: snacks });
        const { getByText } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        getByText("Loading!");
        await waitFor(() => getByText(WELCOME_TEXT));
        expect(axios.get).toHaveBeenCalledTimes(2);
    });

    it("renders the snack menu and can go back", async function () {
        axios.get.mockResolvedValueOnce({ data: drinks });
        axios.get.mockResolvedValueOnce({ data: snacks });
        const { getByText } = render(
            <MemoryRouter >
                <App />
            </MemoryRouter>
        );
        await waitFor(() => getByText(WELCOME_TEXT));
        fireEvent.click(getByText("Snacks"));
        await waitFor(() => getByText("Snack Menu"));
        expect(axios.get).toHaveBeenCalledTimes(2);
        fireEvent.click(getByText("This is the cafe name"));
        await waitFor(() => getByText(WELCOME_TEXT));
    });

    it("renders the drink menu", async function () {
        axios.get.mockResolvedValueOnce({ data: drinks });
        axios.get.mockResolvedValueOnce({ data: snacks });
        const { getByText } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        await waitFor(() => getByText(WELCOME_TEXT));
        fireEvent.click(getByText("Drinks"));
        await waitFor(() => getByText("Drink Menu"));
        expect(axios.get).toHaveBeenCalledTimes(2);
        fireEvent.click(getByText("This is the cafe name"));
        await waitFor(() => getByText(WELCOME_TEXT));
    });


    it("renders a drink from the menu and goes home", async function () {
        axios.get.mockResolvedValueOnce({ data: drinks });
        axios.get.mockResolvedValueOnce({ data: snacks });
        const { getByText } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        await waitFor(() => getByText(WELCOME_TEXT));
        fireEvent.click(getByText("Drinks"));
        await waitFor(() => getByText("Drink Menu"));
        expect(axios.get).toHaveBeenCalledTimes(2);
        fireEvent.click(getByText("Martini"));
        await waitFor(() => getByText("An ice-cold, refreshing classic."));
        fireEvent.click(getByText("This is the cafe name"));
        await waitFor(() => getByText(WELCOME_TEXT));
    });


    it("renders a snack from the menu and goes home", async function () {
        axios.get.mockResolvedValueOnce({ data: drinks });
        axios.get.mockResolvedValueOnce({ data: snacks });
        const { getByText } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        await waitFor(() => getByText(WELCOME_TEXT));
        fireEvent.click(getByText("Snacks"));
        await waitFor(() => getByText("Snack Menu"));
        expect(axios.get).toHaveBeenCalledTimes(2);
        fireEvent.click(getByText("123"));
        await waitFor(() => getByText("this is the test description for 123"));
        fireEvent.click(getByText("This is the cafe name"));
        await waitFor(() => getByText(WELCOME_TEXT));
    });

    it("renders a snack from the menu and goes home", async function () {
        axios.get.mockResolvedValueOnce({ data: drinks });
        axios.get.mockResolvedValueOnce({ data: snacks });
        const { getByText } = render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        await waitFor(() => getByText(WELCOME_TEXT));
        fireEvent.click(getByText("Add to Menu!"));
        await waitFor(() => getByText("Serving Instructions:"));
        expect(axios.get).toHaveBeenCalledTimes(2);
    });
});
