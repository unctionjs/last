/* eslint-disable no-magic-numbers */
import length from "@unction/length";
import {OrderedEnumerableType} from "./types";

export default function last<A> (orderedList: OrderedEnumerableType<A>): A {
  return orderedList[length(orderedList) - 1];
}
