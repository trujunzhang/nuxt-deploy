import * as actions from '@appActions/index'

import { authSessionReducer as reducer } from '../authSessionReducer'

import { AuthSessionStateRecord, defaultAuthSessionRecord } from '../authSessionInitialState'

describe('HIDDEN_WIDGETS_FOR_NEWSLETTER TESTS', () => {
  it('Should return a default state object when invoked the reducer firstly', () => {
    const initialState = new AuthSessionStateRecord(defaultAuthSessionRecord)
    const nextState = reducer(initialState, {})

    const expectedShowTopNewsletter = nextState.mobileWidget.showTopNewsletter
    expect(expectedShowTopNewsletter).toEqual('true')
  })

  it('Should return a new state object after hidden widget for newsletter', () => {
    const initialState = new AuthSessionStateRecord(defaultAuthSessionRecord)

    const action = actions.hideWidgetForTopNewsletter()
    const nextState = reducer(initialState, action)

    const expectedShowTopNewsletter = nextState.mobileWidget.showTopNewsletter
    expect(expectedShowTopNewsletter).toEqual('false')
  })
})

describe('HIDDEN_WIDGETS_FOR_TOP_HERO TESTS', () => {
  it('Should return a default state object when invoked the reducer firstly', () => {
    const initialState = new AuthSessionStateRecord(defaultAuthSessionRecord)
    const nextState = reducer(initialState, {})

    const expectedShowTopHero = nextState.mobileWidget.showTopHero
    expect(expectedShowTopHero).toEqual('true')
  })

  it('Should return a new state object after hidden widget for hero', () => {
    const initialState = new AuthSessionStateRecord(defaultAuthSessionRecord)

    const action = actions.hideWidgetForTopHero()
    const nextState = reducer(initialState, action)

    const expectedShowTopHero = nextState.mobileWidget.showTopHero
    expect(expectedShowTopHero).toEqual('false')
  })
})
