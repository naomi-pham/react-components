export function throttle(fn, delay = 300) {
  return (args) => {
    if (fn.id) return

    fn.id = setTimeout(() => {
      fn.call(this, args)
      clearTimeout(fn.id)
      fn.id = null
    }, delay)
  }
}
