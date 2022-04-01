const addTwoValues = (a, b) => {
  return a + b;
};

describe("When a user addTwoValues", () => {
  it("should return 4", () => {
    // Triple A - damit Tests leserlich sind
    // 1. Arrange - Test vorbereiten (nötige vars, class, ... vorbereiten)

    const a = 2;
    const b = 2;
    const expected = 4;

    // 2. Act - execute what I want to test

    const actual = addTwoValues(a, b);

    // 3. Assert - check result of act phase

    expect(actual).toBe(expected);
  });

  it("should return 6", () => {
    // Triple A - damit Tests leserlich sind
    // 1. Arrange - Test vorbereiten (nötige vars, class, ... vorbereiten)

    const a = 2;
    const b = 4;
    const expected = 6;

    // 2. Act - execute what I want to test

    const actual = addTwoValues(a, b);

    // 3. Assert - check result of act phase

    expect(actual).toBe(expected);
  });
});
