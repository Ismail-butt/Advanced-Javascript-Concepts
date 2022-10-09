// Hoisting

// Declarations are actually hoisted and Intializations are not hoisted.

console.log(x) // Undefined

var x = 2 // Declaration const x & Intialization x = 2

// Note: let & const are not hoisted

console.log(stepTwo())
// console.log(stepOne()) // Error bcz it's an Intialization

// the keyword "function" is a function declaration.
function stepTwo() {
  console.log('Step Two')
}

const stepOne = () => {
  console.log('Step One')
}

// Review

// Declarations are actually hoisted and the keyword "function" is a function declaration.
// However Arrow ftns are Intializations and
// Let & const are not hoisted but var is hoisted
