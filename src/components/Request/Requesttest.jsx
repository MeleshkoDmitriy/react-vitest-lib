import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { Request } from "./Request";

describe("Testing fetch in Request component", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it("displays user data after loading", async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({ id: 9, name: "John Doe", email: "johndoe@gmail.com" }),
    });

    render(<Request userId={9} />);

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/john doe/i)).toBeInTheDocument();
      expect(screen.getByText(/johndoe@gmail.com/i)).toBeInTheDocument();
    });
  });
});
