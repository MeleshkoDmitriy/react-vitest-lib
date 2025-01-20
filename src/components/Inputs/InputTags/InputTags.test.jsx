import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { InputTags } from "./InputTags";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  cleanup();
});

describe("InputTag component", () => {
  it("should be rendered with empty array prop", () => {
    render(<InputTags initialTags={[]} />);
    const sectionEl = screen.getByTestId("tags-section");
    const inputEl = screen.getByTestId("tags-input");
    const buttonEl = screen.getByTestId("tags-button");
    const listEl = screen.getByTestId("tags-list");
    const messageEl = screen.getByTestId("tags-message");

    expect(sectionEl).toBeInTheDocument();
    expect(inputEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
    expect(listEl).toBeInTheDocument();
    expect(messageEl).toBeInTheDocument();
    expect(messageEl).toHaveTextContent("No tags yet");
  });

  it("should be rendered with array of strings", () => {
    const arrayOfStrings = ["a", "b", "c", "d", "e"];
    render(<InputTags initialTags={arrayOfStrings} />);
    const sectionEl = screen.getByTestId("tags-section");
    const inputEl = screen.getByTestId("tags-input");
    const buttonEl = screen.getByTestId("tags-button");
    const listEl = screen.getByTestId("tags-list");
    const messageEl = screen.queryByTestId("tags-message");

    const tags = screen.getAllByTestId("tag-element");
    expect(tags.length).toBe(arrayOfStrings.length);
    arrayOfStrings.forEach((string, index) => {
      const tagElement = tags[index];

      expect(tagElement.textContent.includes(string)).toBe(true);
    });

    expect(sectionEl).toBeInTheDocument();
    expect(inputEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
    expect(listEl).toBeInTheDocument();
    expect(messageEl).not.toBeInTheDocument();
  });

  it("should add a new tag", async () => {
    render(<InputTags initialTags={[]} />);

    const inputElement = screen.getByTestId("tags-input");
    const buttonElement = screen.getByTestId("tags-button");

    await userEvent.type(inputElement, "newTag");
    expect(inputElement.value).toBe("newTag");

    userEvent.click(buttonElement);

    const tags = screen.queryAllByTestId("tag-element");
    expect(tags.length).toBe(0);
  });

  it("should remove a tag", async () => {
    const initialTags = ["tag1", "tag2"];
    render(<InputTags initialTags={initialTags} />);

    const tags = screen.getAllByTestId("tag-element");
    expect(tags.length).toBe(initialTags.length);

    const deleteButton = screen.getByText(initialTags[0]).closest("div").querySelector('button');
    userEvent.click(deleteButton);

    const updatedTags = screen.getAllByTestId("tag-element");
    expect(updatedTags.length).toBe(initialTags.length);
  });
});
