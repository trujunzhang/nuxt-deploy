import * as actions from '@appActions/index'

import { mockedAuthSessionInitialStateObject } from 'app/mocks'

import { authSessionReducer as reducer } from '../authSessionReducer'

import { AuthSessionStateRecord, defaultAuthSessionRecord } from '../authSessionInitialState'

describe('Should return immutable recorder instance, in the auth session for mobile', () => {
  it('Should return immutable recorder instance, when initialState is only an object', () => {
    const hideTopNewsLetterAction = actions.hideWidgetForTopNewsletter()
    const initialState = new AuthSessionStateRecord(defaultAuthSessionRecord)
    // Step1: init reducer.
    let nextState = reducer(initialState, {})

    // Step2: invoke hide newsLetter action
    nextState = reducer(mockedAuthSessionInitialStateObject, hideTopNewsLetterAction)

    const expectedShowTopNewsletter = nextState.mobileWidget.showTopNewsletter
    expect(expectedShowTopNewsletter).toEqual('false')
  })
})
