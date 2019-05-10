/**
 * sorted-cartesian-product
 * Cartesian product of a list including only sorted elements
 */

const { List } = require('immutable-ext')


/**
 * Cartesian product of a list including only sorted elements.
 *
 * @param xs - Array to dot-product with itself
 * @returns A list containing only sorted elements of the
 * cartesian-product of `xs` with itself
 */
export function sortedCartesianProduct(xs: ReadonlyArray<number>): number[][] {
    const product: number[][] = List.of((x: number) => (y: number) => [x, y])
        .ap(List(xs))
        .ap(List(xs))
        .toJS()
    return product
        .filter(xs => xs[0] < xs[1])
}
