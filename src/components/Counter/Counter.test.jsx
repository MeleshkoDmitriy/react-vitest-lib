import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import userEvent from "@testing-library/user-event";
import { Counter } from "./Counter";

describe("Counter component", () => {
  it("increment button test", async () => {
    render(<Counter />);
    const incrementBtn = screen.getByRole("button", { name: /increment/i });
    const decrementBtn = screen.getByRole("button", { name: /decrement/i });
    const valueEl = screen.getByTestId("value-test");

    expect(valueEl).toBeInTheDocument();
    expect(valueEl).toBe("0");

    await userEvent.click(incrementBtn);
    expect(valueEl.textContent).toBe("1");

    await userEvent.click(incrementBtn);
    expect(valueEl.textContent).toBe("2");

    await userEvent.click(decrementBtn);
    expect(valueEl.textContent).toBe("1");

    await userEvent.click(decrementBtn);
    expect(valueEl.textContent).toBe("0");

    await userEvent.click(decrementBtn);
    expect(valueEl.textContent).toBe("-1");
  });
});
