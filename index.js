/* eslint-disable no-magic-numbers */
import length from "@unction/length";
export default function first (orderedList) {
  return orderedList[length(orderedList) - 1];
}
