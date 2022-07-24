import AppContainer from "./AppContainer.js";

describe("Given a component AppContainer", () => {
  describe("When it's instantiated with a div as a parent and an h1 as a child", () => {
    test("Then, the child it should show the text 'Pokedex'", () => {
      const mainContainer = document.createElement("div");
      const title = document.createElement("h1");
      title.textContent = "Pokedex";
      mainContainer.appendChild(title);

      const testContainer = new AppContainer(mainContainer);
      const testTitle = testContainer.element.querySelector("h1");

      expect(testTitle.textContent).toBe(title.textContent);
    });
  });
});
