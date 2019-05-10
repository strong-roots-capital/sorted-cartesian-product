import test from 'ava'

/**
 * Library under test
 */

import { sortedCartesianProduct } from '../src/sorted-cartesian-product'
import isArraySorted = require('is-array-sorted');

test('should return sorted elements', t => {
    let array = [1, 2, 3]
    let expected = [[ 1, 2 ], [ 1, 3 ], [ 2, 3 ]]
    t.deepEqual(expected, sortedCartesianProduct(array))
})

test('should return an empty array', t => {
    let array: number[] = []
    let expected: number[][] = []
    t.deepEqual(expected, sortedCartesianProduct(array))
})

/* Note: typescript prevents these tests */
// test('should return empty lists when given null', t => {
//     t.deepEqual([], sortedCartesianProduct(null))
// })

/* Note: typescript prevents these tests */
// test('should return empty lists when given undefined', t => {
//     t.deepEqual([], sortedCartesianProduct(undefined))
// })

test('should return pairs sorted in ascending order', t => {
    let array = [4, 5, 6, 20, 100]
    sortedCartesianProduct(array).map(pair => t.true(isArraySorted(pair)))
})

test('should not return pairs with equal elements', t => {
    let array = [4, 5, 6, 20, 100]
    sortedCartesianProduct(array).map(pair => t.false(pair[0] === pair[1]))
})
