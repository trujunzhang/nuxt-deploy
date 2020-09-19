import * as React from 'react' // So important
import { AvatarFacebookPage } from '../AvatarFacebookPage'

import * as renderer from 'react-test-renderer'

it('renders without crashing', () => {
  const rendered = renderer.create(<AvatarFacebookPage />).toJSON()
  expect(rendered).toMatchSnapshot()
})
