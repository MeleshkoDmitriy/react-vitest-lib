import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { Tag } from "./Tag";

afterEach(() => {
  cleanup();
})

describe("Tag component", () => {
  it("should be rendered", () => {
    render(<Tag tag="" />);
    const tagEl = screen.getByTestId("tag-element");
    const tagTitle = screen.getByTestId("tag-title");
    const tagButton = screen.getByTestId("tag-button");

    expect(tagEl).toBeInTheDocument();
    expect(tagEl.textContent).toBe('');
    expect(tagTitle).toBeInTheDocument();
    expect(tagButton).toBeInTheDocument();
    expect(tagButton).toBeInTheDocument();
  });
});

