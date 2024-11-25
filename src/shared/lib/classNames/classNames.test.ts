import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  test("with additional classes", () => {
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe("someClass class1 class2");
  });

  test("with mods", () => {
    expect(classNames("someClass", { class1: true, class2: false }, ["class3", "class4"])).toBe(
      "someClass class3 class4 class1"
    );
  });

  test("with mods undefined", () => {
    expect(classNames("someClass", { class1: undefined }, ["class3"])).toBe("someClass class3");
  });
});
