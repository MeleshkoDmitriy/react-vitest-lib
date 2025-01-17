import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { Hello } from "./Hello";

describe("Hello component", () => {
  it("should be Hello, prop value!", () => {
    const prop = "User";
    render(<Hello word={prop} />);
    const titleEl = screen.getByTestId("title-test");
    expect(titleEl).toBeInTheDocument();
    expect(titleEl.textContent).toEqual("Hello, User!");
  });
});

