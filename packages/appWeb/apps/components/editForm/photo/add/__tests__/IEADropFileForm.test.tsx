import * as React from 'react'

// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer'

import { IEADropFileForm } from '../IEADropFileForm'
import { testRedux } from '@config/testRedux'

describe('Button', () => {
  it('render correctly for IEADropFileForm', () => {
    const children = <IEADropFileForm onBeforeDropHook={() => {}} onAfterDropHook={() => {}} />
    const renderPage = testRedux(children)
    const instance = renderer.create(renderPage)

    const page = instance.toJSON()
    expect(page).toMatchSnapshot()
  })
})
