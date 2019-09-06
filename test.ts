/* eslint-disable no-magic-numbers */
import last from "./index";

test(() => {
  expect(last([1, 2, 3])).toEqual(3);
});

test(() => {
  expect(last("abc")).toEqual("c");
});
