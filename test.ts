/* eslint-disable no-magic-numbers */
import last from "./index";

test("works", () => {
  expect(last([1, 2, 3])).toEqual(3);
});

test("works", () => {
  expect(last("abc")).toEqual("c");
});
