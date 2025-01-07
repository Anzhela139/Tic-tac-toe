const get = (name, subst = null) => JSON.parse(window.localStorage.getItem(name) || subst)
const set = (name, value) => window.localStorage.setItem(name, JSON.stringify(value))
const randomizeArray = (arr) => arr.slice(0).sort((a, b) => 0.5 - Math.random())

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  let timeout
  return function () {
    let context = this,
      args = arguments
    let later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    let callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

// Usage
const myEfficientFn = debounce(function () {
  // All the taxing stuff you do
}, 250)
window.addEventListener('resize', myEfficientFn)

function once(fn, context) {
  let result

  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments)
      fn = null
    }

    return result
  }
}

// Usage
const canOnlyFireOnce = once(function () {
  console.log('Fired!')
})

const diagonal = (arr, play, size) => {
  let left = []
  for (let i = 0; i < size; i++) {
    left.push(arr[i * size + i])
  }
  let right = []
  for (let i = 0; i < size; i++) {
    right.push(arr[i * size - i + 2])
  }
  if (left.every((el) => el === play) || right.every((el) => el === play)) return true
  else return false
}

const dimension = (arr, play, size) => {
  let dimensionArr = []
  //eslint-disable-next-line
  dimensionArr = arr.reduce(
    (rows, key, index) =>
      //eslint-disable-next-line
      (index % size == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) && rows,
    [],
  )
  let resultH
  let resultV
  dimensionArr.forEach((el) => {
    if (el.every((item) => item === play)) {
      resultH = true
    }
  })
  const vertArr = []
  for (let i = 0; i < size; i++) {
    vertArr.push([arr[i], arr[i + size], arr[i + size * 2]])
  }
  vertArr.forEach((el) => {
    if (el.every((item) => item === play)) {
      resultV = true
    }
  })
  return resultH || resultV
}

const isEndgame = (arr, play, size) => {
  if (diagonal(arr, play, size) || dimension(arr, play, size)) {
    return true
  } else {
    return false
  }
}

export { get, set, randomizeArray, canOnlyFireOnce, isEndgame }
