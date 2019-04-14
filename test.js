/* eslint-disable no-magic-numbers */
import {test} from "tap";

import last from "./index";

test(({same, end}) => {
  same(
    last([1, 2, 3]),
    3
  );

  end();
});

test(({same, end}) => {
  same(
    last("abc"),
    "c"
  );

  end();
});
