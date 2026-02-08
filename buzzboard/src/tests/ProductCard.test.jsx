import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { vi } from "vitest";
import ProductCard from "../ProductCard";

const mockProduct = {
  id: 1,
  name: "Test Product",
  price: 199.99,
  image: "https://placehold.co/600x400",
  description: "This is a test product description."
};

describe("ProductCard Component", () => {

  test("renders without crashing", () => {
    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} onAddToCart={() => {}} />
      </BrowserRouter>
    );
  });

  test("displays product name from props", () => {
    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} onAddToCart={() => {}} />
      </BrowserRouter>
    );

    expect(screen.getByText("Test Product")).toBeInTheDocument();
  });

  test("displays formatted product price from props", () => {
    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} onAddToCart={() => {}} />
      </BrowserRouter>
    );

    expect(screen.getByText("$199.99")).toBeInTheDocument();
  });

  test("displays product description from props", () => {
    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} onAddToCart={() => {}} />
      </BrowserRouter>
    );

    expect(
      screen.getByText("This is a test product description.")
    ).toBeInTheDocument();
  });

  test('contains an "Add to Cart" button', () => {
    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} onAddToCart={() => {}} />
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: /add to cart/i });
    expect(button).toBeInTheDocument();
  });

  test('clicking "Add to Cart" calls onAddToCart with correct product', () => {
    const mockAddToCart = vi.fn();

    render(
      <BrowserRouter>
        <ProductCard product={mockProduct} onAddToCart={mockAddToCart} />
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: /add to cart/i });

    fireEvent.click(button);

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(mockProduct);
  });

});
