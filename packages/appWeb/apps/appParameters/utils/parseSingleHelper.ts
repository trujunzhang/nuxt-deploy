import { ParseSingleParameters } from '../parseSingle'

export class ParseSingleHelper {
  static getParseSingleParameters(query: IParseQuery, terms: IDatabaseCommonQuery = {}) {
    return new ParseSingleParameters(query).addParameters(terms).end()
  }
}
