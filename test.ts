/* eslint-disable no-magic-numbers */
import last from "./index.ts";

test(() => {
  expect(last([1, 2, 3])).toEqual(3);
});

test(() => {
  expect(last("abc")).toEqual("c");
});
