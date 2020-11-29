/* eslint-disable no-magic-numbers */
import length from "@unction/length";

export default function last<A> (orderedList: OrderedArray<A> | Set<A> | RecordType<unknown, A> | string): A {
  return orderedList[length(orderedList) - 1];
}
