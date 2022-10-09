// Foundation of pure functions - (Deep Copy & Shallow Copy)

// Review

// Primitive vs Structural Data Types

// Primtive data types pass by copy/values

// Structural data types pass by refrence

// Primitive data types are immutable

// Re-assignment is not the same as mutable

// Structural data types contain mutable data

// Shallow copy vs Deep copy (clones of data structures)

// Shallow copies still share references of nested structures
// which allows for mutation of the original data

// Object.freeze() creates a Shallow freeze.

// Deep copies share no refrences.

// All of this is important to know when constructing Pure Functions
// because they require you to avoid mutating the original data.

// Pure Functions

// A part of functional Programming Paradigm

// why write pure functions?
// 1. Clean Code
// 2. Easy to test
// 3. Easy to debug
// 4. Decopuled and Independent
// 5. Could be added to your utility functions

// Rules for Pure Functions:
// 1. The same input ALWAYS gives the same output.
// 2. No Side Effects
// 3. Notice: Pure Functions always return something.

// let's break down with examples

// 1. The same input ALWAYS gives the same output.

const add = (x, y) => x + y
console.log(add(2, 3))

const fullName = (first, last) => `${first} ${last}`
console.log(fullName('Ismail', 'Dev'))

// A pure function should have at least one paramter.

// Otherwise, it is the same as a constant because they
// can only work with their input.

const firstNameftn = () => 'Ismail'

const firstName = 'Ismail'

// 2. No Side Effects

// This also means accessing the scope outside the function makes
// the function impure
const z = 5
const sum = (x, y) => x + y + z
console.log(sum(2, 2, 2))

// Pure Functions Cannot:
// Access a database, API, file system, storage etc
// Modify the DOM
// Or even log to the console

// That said, clearly "impure" functions are necessary
// but they are harder to test and debug

// Furthur, no input state can be modified
// That is, no data should be "mutated"
// Consider all input data to be immutable

// Impure Example 1:
let x = 1
const increment = () => (x += 1)
console.log(increment())
console.log(x)

// Impure Example 2:
const myArray = [1, 2, 3]
const addToArray = (array, data) => {
  array.push(data)
  return array
}
console.log(addToArray(myArray, 4))
console.log(myArray)

// Refactored Example 1
const pureIncrement = (num) => (num += 1)
console.log(pureIncrement(x))
console.log(x)

// Refactored Example 2
const pureAddToArray = (array, data) => [...array, data]
console.log(pureAddToArray(myArray, 5))
console.log(myArray)

// Note: If you have a nested data structue, then spread
// operator will make a shallow copy.

// Note about Shallow Copy
// The spread operator makes deep copies of data
// if the data is not nested. When you have nested data
// in an array or object the spread operator will create
// a deep copy of the top most data and a shallow copy of the nested data.

// Also Notice, how pure functions always return something.
// No return means you definitely do not have a pure function.

// These common Higher Order Functions i.e filter, map, reduce are Pure Functions.

// Review the Rules of Pure Functions
// 1. The same input ALWAYS gives the same output.
// 2. No Side Effects (no mutations!, no accessing outside scope!)

// The goal: Write small, pure functions when you can for code
// that is clean, easy to test and easy to debug.
