// IIFE - Immediately-Invoked Function Expression

// Reason 1) Does not pollute the global object namespace

// global
const x = 'whatever'

const helloWorld = () => {
  return 'Hello World!'
}

// isolate declarations within the function
;(() => {
  const x = 'iife whatever'
  const helloWorld = () => 'Hello IIFE!'
  console.log(x)
  console.log(helloWorld())
})()

console.log(x)
console.log(helloWorld())

// Reason 2) Private Variables and Methods from Closure

const increment = (() => {
  let counter = 0
  console.log(counter)
  const credits = (num) => console.log(`I have ${num} credit(s).`)

  return () => {
    counter++
    credits(counter)
  }
})()

increment()
increment()
// credites(3) // ref Error

// Reason 3) The module Pattern

const Score = (() => {
  let count = 0

  return {
    current: () => {
      return count
    },
    increment: () => {
      count++
    },
    reset: () => {
      count = 0
    },
  }
})()

Score.increment()
console.log(Score.current())
Score.increment()
console.log(Score.current())
Score.reset()
console.log(Score.current())
