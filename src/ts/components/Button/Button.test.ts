import Button from "./Button";

describe("Given a Button component", () => {
  const container = document.createElement("div");
  const action = jest.fn();

  describe("When instantiated with the text next", () => {
    test("Then it should show a button with next inside", () => {
      const text = "next";

      new Button(container, text, action);
      const button = container.querySelector("button");

      expect(button.textContent).toBe(text);
    });
  });

  describe("When instantiated with a function and the user clicks on the button", () => {
    test("Then it should invoke the received function", () => {
      new Button(container, "", action);

      const button = container.querySelector("button");
      button.click();

      expect(action).toHaveBeenCalled();
    });
  });
});
