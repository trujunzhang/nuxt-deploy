import Parse from 'parse'

import { AppConstants } from '@app/types'

const parseApi = AppConstants.parseApi

export class ParseClientSetup {
  static setupClientParse() {
    const applicationId: string = parseApi.applicationId
    const javaScriptKey: string = parseApi.javaScriptKey
    const masterKey: string = parseApi.masterKey

    Parse.initialize(applicationId, javaScriptKey)

    const parse = Parse // 'parse' variable is so important.

    parse.masterKey = masterKey
    parse.serverURL = AppConstants.parseServerURL

    // debugger
  }
}
