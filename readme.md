# sorted-cartesian-product [![Build status](https://travis-ci.org/strong-roots-capital/sorted-cartesian-product.svg?branch=master)](https://travis-ci.org/strong-roots-capital/sorted-cartesian-product) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/sorted-cartesian-product.svg)](https://npmjs.org/package/@strong-roots-capital/sorted-cartesian-product) [![codecov](https://codecov.io/gh/strong-roots-capital/sorted-cartesian-product/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/sorted-cartesian-product)

> Cartesian product of a list including only sorted elements

## Install

```shell
npm install @strong-roots-capital/sorted-cartesian-product
```

## Use

```typescript
import { sortedCartesianProduct } from '@strong-roots-capital/sorted-cartesian-product'

let array = [1, 2, 3]
sortedCartesianProduct(array))
//=> [[ 1, 2 ], [ 1, 3 ], [ 2, 3 ]]
```
