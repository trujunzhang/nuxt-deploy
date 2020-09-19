const isEmpty = (value: any) => {
  return value === undefined || value === null || value === ''
}
const join = (rules) => (value, data) =>
  rules.map((rule: any) => rule(value, data)).filter((error: any) => !!error)[0 /* first error */]

export class Validation {
  static email(value) {
    // Let's not start a debate on email regex. This is just for an example app!
    if (!isEmpty(value) && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return 'Invalid email address'
    }
    return null
  }

  static required(value) {
    if (isEmpty(value)) {
      return 'Required'
    }
    return null
  }

  static minLength(min) {
    return (value: any) => {
      if (!isEmpty(value) && value.length < min) {
        return `Must be at least ${min} characters`
      }
      return null
    }
  }

  static maxLength(max) {
    return (value: any) => {
      if (!isEmpty(value) && value.length > max) {
        return `Must be no more than ${max} characters`
      }
      return null
    }
  }

  static integer(value) {
    if (!Number.isInteger(Number(value))) {
      return 'Must be an integer'
    }
    return null
  }

  static oneOf(enumeration) {
    return (value: any) => {
      // tslint:disable-next-line:no-bitwise
      if (!~enumeration.indexOf(value)) {
        return `Must be one of: ${enumeration.join(', ')}`
      }
      return null
    }
  }

  static match(field) {
    return (value, data) => {
      if (data) {
        if (value !== data[field]) {
          return 'Do not match'
        }
      }
      return null
    }
  }

  static createValidator(rules) {
    return (data = {}) => {
      const errors = {}
      Object.keys(rules).forEach((key) => {
        const rule = join([].concat(rules[key])) // concat enables both functions and arrays of functions
        const error = rule(data[key], data)
        if (error) {
          errors[key] = error
        }
      })
      return errors
    }
  }
}
