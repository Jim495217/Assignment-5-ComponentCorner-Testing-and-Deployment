import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import CartItem from "../CartItem";

const mockItem = {
  id: 1,
  name: "Test Item",
  price: 49.99,
  quantity: 2
};

describe("CartItem Component", () => {
  test("renders item information correctly", () => {
    render(
      <CartItem item={mockItem} onRemove={() => {}} />
    );

    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByText("$49.99")).toBeInTheDocument();
  });

  test("calls onRemove when remove button is clicked", () => {
    const mockRemove = vi.fn();

    render(
      <CartItem item={mockItem} onRemove={mockRemove} />
    );

    const button = screen.getByRole("button", { name: /remove/i });

    fireEvent.click(button);

    expect(mockRemove).toHaveBeenCalledTimes(1);
    expect(mockRemove).toHaveBeenCalledWith(mockItem.id);
  });
});
