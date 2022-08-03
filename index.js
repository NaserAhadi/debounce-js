const input = document.querySelector('input')
const defaultText = document.querySelector('.default-text')
const debounceText = document.querySelector('.debounce-text')

const updateDebounceText = debounce((text) => {
  debounceText.textContent = text
})

input.addEventListener('input', event => {
  defaultText.textContent = event.target.value
  updateDebounceText(event.target.value)
})


function debounce(cb, delay = 1000) {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args)
      console.log('...args', ...args);
    }, delay)
  }
}
