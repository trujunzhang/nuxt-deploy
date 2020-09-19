import { AuthSessionStateRecord, defaultAuthSessionRecord } from '../authSessionInitialState'

import { mockedNormalUserInstance } from 'app/mocks'
import { ReducerHelper } from '@app/library' // from '@appLibs/index

describe('With immutable Auth Session Initial tests', () => {
  it('Should return a new state object when initialized the auth session instance', () => {
    const initialState = new AuthSessionStateRecord(defaultAuthSessionRecord)

    const expectedLoaded = initialState.loaded
    expect(expectedLoaded).toEqual(false)

    const expectedUser = initialState.user
    expect(expectedUser).toEqual(null)

    const expectedShowTopNewsletter = initialState.mobileWidget.showTopNewsletter
    expect(expectedShowTopNewsletter).toEqual('true')

    const expectedShowTopHero = initialState.mobileWidget.showTopHero
    expect(expectedShowTopHero).toEqual('true')
  })

  it('Should return a new state object after Users logged', () => {
    const initialState = new AuthSessionStateRecord(defaultAuthSessionRecord)

    const nextState = initialState.setLoggedUser(mockedNormalUserInstance)

    const expectedLoaded = nextState.loaded
    expect(expectedLoaded).toEqual(true)

    const expectedUser = nextState.user
    expect(expectedUser.id).toEqual(mockedNormalUserInstance.id)
  })

  it('Should return a new state object after users logout', () => {
    const initialState = new AuthSessionStateRecord(defaultAuthSessionRecord)

    const nextState = initialState.setLoggedUser(null)

    const expectedLoaded = nextState.loaded
    expect(expectedLoaded).toEqual(true)

    const expectedUser = nextState.user
    expect(expectedUser).toEqual(null)
  })
})

describe('With immutable Auth Session only for mobile widget', () => {
  it('Should return a new state object after hidden the showTopNewsletter', () => {
    const initialState = new AuthSessionStateRecord(defaultAuthSessionRecord)

    const nextState = initialState.hideTopNewsLetter()

    const expectedShowTopNewsletter = nextState.mobileWidget.showTopNewsletter
    expect(expectedShowTopNewsletter).toEqual('false')
  })

  it('Should return a new state object after hidden the showTopHero', () => {
    const initialState = new AuthSessionStateRecord(defaultAuthSessionRecord)

    const nextState = initialState.hideTopHero()

    const expectedShowTopHero = nextState.mobileWidget.showTopHero
    expect(expectedShowTopHero).toEqual('false')
  })

  it('Should return a new state object after hidden the welcome screen', () => {
    const initialState = new AuthSessionStateRecord(defaultAuthSessionRecord)

    const nextState = initialState.hideWelcomeScreen()

    const expectedHasHiddenShowWelcome = ReducerHelper.hasWidgetWelcomeScreenHidden({
      authSession: nextState
    })

    expect(expectedHasHiddenShowWelcome).toEqual(true)
  })
})
