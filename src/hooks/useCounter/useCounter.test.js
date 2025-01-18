import React from "react";
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { useCounter } from "./useCounter";

describe("useCounter test", () => {
  it("initial value = 3", () => {
    const { result } = renderHook(() => useCounter(3));
    expect(result.current.value).toBe(3);
  });

  it("decrement test", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.value).toBe(0);

    act(() => {
      result.current.decrement();
    });
    expect(result.current.value).toBe(-1);
  });

  it("increment test", () => {
    const { result } = renderHook(() => useCounter(3));
    expect(result.current.value).toBe(3);

    act(() => {
      result.current.increment();
    });
    expect(result.current.value).toBe(4);

    act(() => {
      result.current.increment();
    });
    expect(result.current.value).toBe(5);
  });
});
