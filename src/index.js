/** @module alias-fields */

import {ensureArray} from "magina"
import immer from "immer"

/**
 * Returns the passed object with key replaced based on given `aliasMap`
 * @example
 * import aliasFields from "alias-fields"
 * const result = aliasFields()
 * result === 1549410770
 * @param {object} object
 * @param {object} aliasMap
 * @returns {object} The cleaned object
 */
export default (object = {}, aliasMap = {}) => {
  return immer(object, draft => {
    for (const [realKey, aliasKeys] of Object.entries(aliasMap)) {
      for (const aliasKey of aliasKeys |> ensureArray) {
        console.log(aliasKey)
        if (draft.hasOwnProperty(aliasKey)) {
          draft[realKey] = draft[aliasKey]
          delete draft[aliasKey]
        }
      }
    }
  })
}