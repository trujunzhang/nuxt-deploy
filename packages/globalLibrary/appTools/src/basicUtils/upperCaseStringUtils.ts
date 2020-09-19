import CamelCase from 'camelcase'

export class UpperCaseStringUtils {
  static toCamelClassName(name: string) {
    return CamelCase(name, { pascalCase: true })
  }
}
