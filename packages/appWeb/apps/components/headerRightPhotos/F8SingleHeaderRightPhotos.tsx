import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { PhotosScrollHelper } from '@appUtils/index'
import { withRouter } from 'next/router'

interface IF8SingleHeaderRightPhotosProps {
  objectSchemaName: string
  forObject: any
  photosListTask: IListWithPhotosDictTask
}

interface IF8SingleHeaderRightPhotosState {
  photoModelObject: IPhotoBrowserObject
}

interface IF8SingleHeaderRightPhotosWithRouterProps {
  router: IWebAppRouterProps
}

type F8SingleHeaderRightPhotosPropsWithRouter = IF8SingleHeaderRightPhotosProps &
  IF8SingleHeaderRightPhotosWithRouterProps

@(withRouter as any)
export class F8SingleHeaderRightPhotos extends React.Component<
  IF8SingleHeaderRightPhotosProps,
  IF8SingleHeaderRightPhotosState
> {
  constructor(props: IF8SingleHeaderRightPhotosProps) {
    super(props)
    const { router } = props as F8SingleHeaderRightPhotosPropsWithRouter
    this.state = {
      photoModelObject: PhotosScrollHelper.generateHeaderRightPhotoObject({
        objectSchemaName: props.objectSchemaName,
        forObject: props.forObject,
        photosListTask: props.photosListTask,
        router
      })
    }
  }

  componentWillReceiveProps(nextProps: IF8SingleHeaderRightPhotosProps) {
    const { router } = nextProps as F8SingleHeaderRightPhotosPropsWithRouter
    this.setState({
      photoModelObject: PhotosScrollHelper.generateHeaderRightPhotoObject({
        objectSchemaName: nextProps.objectSchemaName,
        forObject: nextProps.forObject,
        photosListTask: nextProps.photosListTask,
        router
      })
    })
  }

  render() {
    const { objectSchemaName, forObject, photosListTask } = this.props
    const { photoModelObject } = this.state
    if (photoModelObject.photosWallModel) {
      return (
        // Like a photo wall, 4 photos one wall.
        <Telescope.F8SingleHeaderRightPhotosWallModel
          objectSchemaName={objectSchemaName}
          forObject={forObject}
          photosListTask={photosListTask}
          photoModelObject={photoModelObject}
        />
      )
    }
    return (
      // Scroll between left and right.
      <Telescope.F8SingleHeaderRightPhotosScrollModel
        objectSchemaName={objectSchemaName}
        forObject={forObject}
        photosListTask={photosListTask}
        photoModelObject={photoModelObject}
      />
    )
  }
}
