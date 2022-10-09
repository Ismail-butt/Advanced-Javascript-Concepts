// Currying

// currying takes a function that recieves more than one paramter
// and breaks it into a series of unary (one paramater) functions.

// Therefore, a currired function only takes one parameter at a time.

// Example 1 - buildSandwich
const buildSandwich = (ingred1) => (ingred2) => (ingred3) =>
  `${ingred1}, ${ingred2}, ${ingred3}`

const mySandwich = buildSandwich('turkey')('cheese')('bread')

console.log('My Sandwich: ', mySandwich)

// Example 2 - Multiply
const multiply = (x, y) => x * y

const curriedMultiply = (x) => (y) => {
  return x * y
}

console.log('Standard Ftn: ', multiply(2, 3)) // Standard Function
console.log('Partially Applied Curried ftn: ', curriedMultiply(10)) // Partially Applied Function, will return a ftn

// Partialy applied function are a common use of currying
const timesTen = curriedMultiply(10)
console.log('Times Ten * 8: ', timesTen(8))
