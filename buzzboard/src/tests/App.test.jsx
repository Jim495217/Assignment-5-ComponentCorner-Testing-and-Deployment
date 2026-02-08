import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { vi } from "vitest";
import App from "../App";

// ---- MOCK localStorage ----
const localStorageMock = (() => {
  let store = {};

  return {
    getItem: vi.fn((key) => store[key] || null),
    setItem: vi.fn((key, value) => {
      store[key] = value;
    }),
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

// ---- TESTS ----
describe("App Component - Cart State & localStorage", () => {
  beforeEach(() => {
    localStorageMock.clear();
    vi.clearAllMocks();
  });

  test("renders without crashing", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  test("loads cart from localStorage on startup", () => {
    const mockCart = [
      { id: 1, name: "Wireless Earbuds", price: 99.99 },
    ];

    localStorage.getItem.mockReturnValueOnce(
      JSON.stringify(mockCart)
    );

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    expect(localStorage.getItem).toHaveBeenCalledWith("cart");
  });

  test("adds item to cart and saves to localStorage", async () => {
    render(
      <MemoryRouter initialEntries={["/products"]}>
        <App />
      </MemoryRouter>
    );

    const addButtons = screen.getAllByRole("button", {
      name: /add to cart/i,
    });

    fireEvent.click(addButtons[0]);

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith(
        "cart",
        expect.any(String)
      );
    });
  });

  test("useEffect updates localStorage when cart changes", async () => {
    render(
      <MemoryRouter initialEntries={["/products"]}>
        <App />
      </MemoryRouter>
    );

    const addButtons = screen.getAllByRole("button", {
      name: /add to cart/i,
    });

    fireEvent.click(addButtons[0]);

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalled();
    });
  });
});
