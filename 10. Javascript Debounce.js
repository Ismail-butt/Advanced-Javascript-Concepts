// Debounce Functions
// The debounce function prevents functions from being called too soon. - Simple Explanation
// Standard Example - Shopping Order Button.

const initApp = () => {
  const button = document.querySelector('button')
  button.addEventListener('click', debounce(clickLog, 2000))
}

const clickLog = () => console.log('Click')

document.addEventListener('DOMContentLoaded', initApp)

const debounce = (ftn, delay) => {
  let id
  console.log(`Id at Immediate Load: ${id}`)
  return (...args) => {
    console.log(`Previous Id: ${id}`)
    if (id) clearTimeout(id)
    id = setTimeout(() => {
      ftn(...args)
    }, delay)
  }
}
