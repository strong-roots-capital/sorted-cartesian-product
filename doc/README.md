
sorted-cartesian-product [![Build status](https://travis-ci.org/strong-roots-capital/sorted-cartesian-product.svg?branch=master)](https://travis-ci.org/strong-roots-capital/sorted-cartesian-product) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/sorted-cartesian-product.svg)](https://npmjs.org/package/@strong-roots-capital/sorted-cartesian-product) [![codecov](https://codecov.io/gh/strong-roots-capital/sorted-cartesian-product/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/sorted-cartesian-product)
=======================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Cartesian product of a list including only sorted elements

Install
-------

```shell
npm install @strong-roots-capital/sorted-cartesian-product
```

Use
---

```typescript
import { sortedCartesianProduct } from '@strong-roots-capital/sorted-cartesian-product'

let array = [1, 2, 3]
sortedCartesianProduct(array))
//=> [[ 1, 2 ], [ 1, 3 ], [ 2, 3 ]]
```

## Index

### Functions

* [sortedCartesianProduct](#sortedcartesianproduct)

---

## Functions

<a id="sortedcartesianproduct"></a>

###  sortedCartesianProduct

▸ **sortedCartesianProduct**(xs: *`ReadonlyArray`<`number`>*): `number`[][]

*Defined in [sorted-cartesian-product.ts:16](https://github.com/strong-roots-capital/sorted-cartesian-product/blob/d9a9f7f/src/sorted-cartesian-product.ts#L16)*

Cartesian product of a list including only sorted elements.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| xs | `ReadonlyArray`<`number`> |  Array to dot-product with itself |

**Returns:** `number`[][]
A list containing only sorted elements of the
cartesian-product of `xs` with itself

___

