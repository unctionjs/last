/* eslint-disable no-magic-numbers */
import length from "@unction/length"

export default function first (orderedList: ArrayType | string): mixed {
  return orderedList[length(orderedList) - 1]
}
