export function fetchJson(
  url: string,
  successCb: (data: any) => any,
  errorCb: (status: any) => any
) {
  const request = new XMLHttpRequest()
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        const data = JSON.parse(request.responseText)
        // console.log('fetch json:', JSON.stringify(data))
        successCb(data)
      } else {
        // console.log('fetch json(error):', request.status)
        errorCb(request.status)
      }
    }
  }
  request.open('GET', url, true)
  request.send()
}

export function fetchJSONP(url: string, successCb: (data: any) => any, errorCb: () => any) {
  const callbackName = 'jsonp_cb_' + Math.round(100000 * Math.random())

  const script = document.createElement('script')
  script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName
  document.body.appendChild(script)

  script.onerror = () => {
    errorCb()
  }
  ;(window as any)[callbackName] = (data: any) => {
    delete (window as any)[callbackName]
    document.body.removeChild(script)
    successCb(data)
  }
}

export const defaultColors = ['#d73d32', '#7e3794', '#4285f4', '#67ae3f', '#d61a7f', '#ff4080']

// https://regex101.com/r/YEsPER/1
// https://developer.mozilla.org/en-US/docs/Web/CSS/length
const reSize = /^([-+]?(?:\d+(?:\.\d+)?|\.\d+))([a-z]{2,4}|%)?$/

// https://en.wikipedia.org/wiki/Linear_congruential_generator
function _stringAsciiPRNG(value: any, m: any) {
  // Xn+1 = (a * Xn + c) % m
  // 0 < a < m
  // 0 <= c < m
  // 0 <= X0 < m

  // const charCodes = [1, 2, 3, 4] // [...value].map(letter => letter.charCodeAt(0))
  // const source = [...value]
  const source: string[] = Array.from(value)
  const charCodes = source.map((letter) => letter.charCodeAt(0))
  const len = charCodes.length

  const a = (len % (m - 1)) + 1
  const c = charCodes.reduce((current, next) => current + next) % m

  let random = charCodes[0] % m
  for (let i = 0; i < len; i++) {
    random = (a * random + c) % m
  }

  return random
}

export function getRandomColor(value: any, colors = defaultColors) {
  // if no value is passed, always return transparent color otherwise
  // a rerender would show a new color which would will
  // give strange effects when an interface is loading
  // and gets rerendered a few consequent times
  if (!value) {
    return 'transparent'
  }

  // value based random color index
  // the reason we don't just use a random number is to make sure that
  // a certain value will always get the same color assigned given
  // a fixed set of colors
  const colorIndex = _stringAsciiPRNG(value, colors.length)
  return colors[colorIndex]
}

export interface IParseSizeResult {
  value: number // {40}
  str: string // "40px"
  unit: string // "px"
}

export function parseSize(size: any) {
  const fixedSize = '' + size

  const regMatchResult: any | null = reSize.exec(fixedSize)
  const [, value = 0, unit = 'px'] = regMatchResult

  const result: IParseSizeResult = {
    value: Number(value as any),
    str: `${value}${unit}`, // "40px"
    unit
  }
  return result
}

export function defaultInitials(name: string, { maxInitials }: any) {
  return name
    .split(/\s/)
    .map((part) => part.substring(0, 1).toUpperCase())
    .filter((v) => !!v)
    .slice(0, maxInitials)
    .join('')
}
