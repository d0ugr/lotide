# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @d0ugr/lotide`

**Require it:**

`const _ = require('@d0ugr/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Returns the first element of the specified array/string, or undefined if the array is empty.  Incorrect type or undefined cause an error.
* `middle(array)`: Returns the middle element(s) of the specified array/string, or an empty array/string if there are fewer than three elements.  Incorrect type or undefined cause an error.
* `tail(array)`: Returns the elements of an array/string following the first one.  Incorrect type or undefined cause an error.
