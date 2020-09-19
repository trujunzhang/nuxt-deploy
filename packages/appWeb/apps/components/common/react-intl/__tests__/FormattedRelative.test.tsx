import * as React from 'react'

import { FormattedRelative } from '../FormattedRelative'
// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer'

import { testRedux } from '@config/testRedux'

describe('Button', () => {
  it('primary, text', () => {
    const properties = {
      value: '2017-12-23T12:16:54.471+0000'
    }

    const children = <FormattedRelative value={properties.value} />
    const renderPage = testRedux(children)

    // TODO: DJZHANG
    // const instance = renderer.create(renderPage)

    // const page = instance.toJSON()
    // expect(page).toMatchSnapshot()
  })
})
