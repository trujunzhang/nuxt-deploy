// see: http://stackoverflow.com/questions/1909441/jquery-keyup-delay
const delay = (() => {
  let timer: any = 0
  return (callback, ms) => {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()

export function delayEvent(callback, ms) {
  delay(() => {
    callback()
  }, ms)
}

function random(max, min, exceptions) {
  max = max || 0
  min = min || 0
  exceptions = exceptions || []
  const rand: number = Math.floor(Math.random() * (max + 1 - min) + min)
  if (exceptions.indexOf(rand) === -1) {
    return rand
  } else {
    return random(max, min, exceptions)
  }
}

export function getIsMobile() {
  let isMobile = false
  const innerWidth = window.innerWidth
  try {
    isMobile = !!(
      (window.navigator && (window.navigator as any).standalone) ||
      navigator.userAgent.match('CriOS') ||
      navigator.userAgent.match(/mobile/i)
    )
  } catch (ex) {
    // continue regardless of error
  }
  return isMobile
}

export function range(start, stop, step) {
  if (typeof stop === 'undefined') {
    // one param defined
    stop = start
    start = 0
  }
  if (typeof step === 'undefined') {
    step = 1
  }
  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return []
  }
  const result: any = []
  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i)
  }
  return result
}

export function cloneArray(array: any) {
  return array.slice(0)
}

export function cloneObject(object: any) {
  return Object.assign({}, object)
}
