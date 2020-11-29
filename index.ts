/* eslint-disable no-magic-numbers */
import length from "@unction/length";

export default function last<A> (orderedList: OrderedArray<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): A {
  return orderedList[length(orderedList) - 1];
}
