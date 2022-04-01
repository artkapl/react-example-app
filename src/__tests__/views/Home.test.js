import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import Home from "../../views/Home";

describe("When a user interacts with the Input field", () => {
  it("should return 'abc' for the react state if the user types 'abc'", () => {
    // Arrange / Given
    render(<Home />);
    const expected = "abc";
    const input = screen.getByLabelText("Fruit Name");

    // Act / When
    fireEvent.change(input, { target: { value: "abc" } });

    // Assert / Then
    expect(input.value).toBe(expected);
  });

  it("should add a new text 'abc' when the user adds abs in the input and clicks the button", () => {
    // Arrange / Given
    render(<Home />);
    const expected = "abc";
    const input = screen.getByLabelText("Fruit Name");
    const button = screen.getByText("Create New Fruit");

    // Act / When
    fireEvent.change(input, { target: { value: "abc" } });
    fireEvent.click(button);
    const actual = screen.getByText("abc");

    // Assert / Then
    expect(actual).toHaveTextContent(expected);
  });
});
