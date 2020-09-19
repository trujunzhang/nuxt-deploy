// Get your favorite AsyncStorage handler with import (ES6) or require

import { AppConstants } from '@app/types'

const parseApi = AppConstants.parseApi

export class ParseClientSetup {
  static setupClientParse() {
    // import { AsyncStorage } from 'react-native'

    const AsyncStorage = require('react-native')['AsyncStorage']
    const Parse = require('parse/react-native')
    // Starting 1.11.0:
    // the Parse SDK does not provide automatically the AsyncStorage for ReactNative.
    // Please call Parse.setAsyncStorage(AsyncStorage) in order to restore the functionality.
    Parse.setAsyncStorage(AsyncStorage) // Parse.js For react native.

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
