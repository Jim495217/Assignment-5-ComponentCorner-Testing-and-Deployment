import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../HomePage";

describe("HomePage Component", () => {
  test("renders without crashing", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  });

  test("displays main heading content", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/why shop with us/i)
    ).toBeInTheDocument();
  });

  test("displays introduction text", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );

    expect(
      screen.getByText(/quality products/i)
    ).toBeInTheDocument();
  });
});
