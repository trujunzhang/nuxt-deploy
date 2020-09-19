import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { pushNewPhotosAsSingle } from '@appActions/index' // from '@web/actions'
import { connect } from 'react-redux'

interface IIEAPhotosSingleLayoutStateProps { }

interface IIEAPhotosSingleLayoutDispatchProps {
  pushNewPhotosAsSingleAction: any
}

interface IIEAPhotosSingleLayoutProps
  extends IIEAPhotosSingleLayoutStateProps,
  IIEAPhotosSingleLayoutDispatchProps {
  objectSchemaName: string
  forObject: IParseModelRestaurants | IParseModelRecipes | IParseModelUsers
  photosListTask: IListWithPhotosDictTask
  photoBrowserType?: string
  photoTitleType?: string
  // userProfile?: any
}

interface IIEAPhotosSingleLayoutDefaultProps {
  photoTitleType: string
  photoBrowserType: string
}

type IEAPhotosSingleLayoutPropsWithDefaults = IIEAPhotosSingleLayoutProps &
  IIEAPhotosSingleLayoutDefaultProps

interface IIEAPhotosSingleLayoutWithRouterProps {
  router: IWebAppRouterProps
}

type IEAPhotosSingleLayoutPropsWithRouter = IIEAPhotosSingleLayoutProps &
  IIEAPhotosSingleLayoutWithRouterProps

interface IIEAPhotosSingleLayoutState { }

function mapDispatchToProps(dispatch) {
  return {
    pushNewPhotosAsSingleAction: (photoId: string, hashCode: string) =>
      dispatch(pushNewPhotosAsSingle(photoId, hashCode))
  }
}

function mapStateToProps(store) {
  return {}
}

@(withRouter as any)
class IEAPhotosSingleLayout extends React.Component<
IIEAPhotosSingleLayoutProps,
IIEAPhotosSingleLayoutState
> {
  public static defaultProps: IIEAPhotosSingleLayoutDefaultProps = {
    photoTitleType: Types.photoBrowserTitle.PHOTO_BROWSER_NORMAL_TITLE,
    photoBrowserType: Types.common.PHOTO_BROWSER_TYPE_FOR_SINGLE_PAGE
  }

  constructor(props: IIEAPhotosSingleLayoutProps) {
    super(props)
    this.state = {}
  }

  renderTitle() {
    const { objectSchemaName, forObject, photosListTask } = this.props

    const { photoTitleType, photoBrowserType } = this
      .props as IEAPhotosSingleLayoutPropsWithDefaults

    if (photoTitleType === Types.photoBrowserTitle.PHOTO_BROWSER_LOGGED_USER_TITLE) {
      return (
        <Telescope.F8PhotosLoggedUserTitleHeader
          forObject={forObject}
          objectSchemaName={objectSchemaName}
          userProfile={forObject as IParseModelUsers}
          photosListTask={photosListTask}
        />
      )
    }
    return (
      <Telescope.F8PhotosSingleTop
        objectSchemaName={objectSchemaName}
        photosListTask={photosListTask}
        forObject={forObject}
      />
    )
  }

  render() {
    const { photoBrowserType } = this.props as IEAPhotosSingleLayoutPropsWithDefaults

    return (
      <div className="main-content-wrap main-content-wrap--full">
        <div id="super-container" className="content-container">
          <div className="container media-details js-media-details">
            {this.renderTitle()}

            <Telescope.F8PhotosContentWithNavBar
              photoBrowserType={photoBrowserType}
              contentClass="media-details_container media-details_container--fixed-height media-details_container--with-sidebar"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEAPhotosSingleLayout)
