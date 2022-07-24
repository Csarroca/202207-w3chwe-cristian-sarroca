import Component from "./component";

describe("Given a Component component", () => {
  describe("When it's instantiated with a section as a parent", () => {
    test("Then it should show a div inside the section", () => {
      const container = document.createElement("section");
      const tag = "div";

      new Component(container, "", tag);

      const expectedElement = container.querySelector("div");

      expect(expectedElement).not.toBeNull();
    });
  });
});
