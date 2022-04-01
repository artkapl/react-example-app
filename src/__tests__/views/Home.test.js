import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import Home from "../../views/Home";

describe("When a user interacts with the Input field", () => {
  it("should return 'abc' for the react state if the user types 'abc'", () => {
    // Arrange / Given

    render(<Home />);

    // Act / When

    const expected = "";

    fireEvent.change(screen.getByLabelText("Fruit Name"), "a");

    // Assert / Then
    expect(actual).toBe(expected);
  });
});
