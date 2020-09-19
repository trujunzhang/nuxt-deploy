import * as React from 'react'

// Note: test renderer must be required after react-native.
import * as renderer from 'react-test-renderer'

import { IEAPhotosPreview } from '../IEAPhotosPreview'
import { testRedux } from '@config/testRedux'

describe('Button', () => {
  it('render correctly for IEAPhotosPreview', () => {
    const children = (
      <IEAPhotosPreview
        previewDisabled={false}
        previewImageSrc={'blob:http://localhost:4000/ec21e2bb-3d16-4e48-a2e2-5f47329a7d71'}
        onUploadImagePressed={() => {}}
        onDeletePreviewPressed={() => {}}
      />
    )
    const renderPage = testRedux(children)
    const instance = renderer.create(renderPage)

    const page = instance.toJSON()
    expect(page).toMatchSnapshot()
  })
})
