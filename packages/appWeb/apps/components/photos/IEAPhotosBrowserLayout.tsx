import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { pushNewPhotosAsSingle } from '@appActions/index' // from '@web/actions'
import * as Types from '@app/types'
import { connect } from 'react-redux'

interface IIEAPhotosBrowserLayoutStateProps { }

interface IIEAPhotosBrowserLayoutDispatchProps {
  pushNewPhotosAsSingleAction: any
}

interface IIEAPhotosBrowserLayoutProps
  extends IIEAPhotosBrowserLayoutStateProps,
  IIEAPhotosBrowserLayoutDispatchProps {
  objectSchemaName: string
  photosListTask: IListWithPhotosDictTask
  forObject: any
  reviewStatistic?: any
  userProfile?: IParseModelUsers
  onOwnPhotoForRecipes?: any
  showAlertSection?: boolean
  photoTitleType: string
  barType: string
}

interface IIEAPhotosBrowserLayoutState { }

function mapDispatchToProps(dispatch) {
  return {
    pushNewPhotosAsSingleAction: (photoId: string, hashCode: string) =>
      dispatch(pushNewPhotosAsSingle(photoId, hashCode))
  }
}

function mapStateToProps(store) {
  return {}
}

class IEAPhotosBrowserLayout extends React.Component<
  IIEAPhotosBrowserLayoutProps,
  IIEAPhotosBrowserLayoutState
  > {
  renderFooter() {
    const { barType } = this.props
    return (
      <div className="media-landing_footer">
        <div className="media-pager">
          <Telescope.F8PaginationButtonNavigationBar
            barType={barType}
            listTask={this.props.photosListTask}
          />
        </div>
      </div>
    )
  }

  renderContent() {
    const { forObject, objectSchemaName, photosListTask, photoTitleType } = this.props
    const { results, ready } = photosListTask
    if (!ready) {
      return <Telescope.F8LoadingView />
    } else if (!!results && results.length) {
      return (
        <Telescope.F8PhotosCollectionView
          objectSchemaName={objectSchemaName}
          forObject={forObject}
          photos={photosListTask.results}
          photoTitleType={photoTitleType}
          onOwnPhotoForRecipes={this.props.onOwnPhotoForRecipes}
          showAlertSection={true}
        />
      )
    } else {
      return (
        <Telescope.F8EmptySection
          title={`No Photos`}
          text={"You can upload photos clicking the 'Add Photo' button."}
        />
      )
    }
  }

  renderTitle() {
    const { objectSchemaName, forObject, reviewStatistic, userProfile, photosListTask } = this.props

    const { photoTitleType } = this.props

    switch (photoTitleType) {
      case Types.photoBrowserTitle.PHOTO_BROWSER_LOGGED_USER_TITLE:
        if (!userProfile) {
          throw new Error('need userProfile in Photos Browser Layout for logged user title!')
        }
        return (
          <Telescope.F8PhotosLoggedUserTitleHeader
            forObject={forObject}
            objectSchemaName={objectSchemaName}
            userProfile={userProfile}
            photosListTask={photosListTask}
          />
        )
      case Types.photoBrowserTitle.PHOTO_BROWSER_NORMAL_TITLE:
        return (
          <Telescope.F8PhotosTitleHeader
            objectSchemaName={objectSchemaName}
            forObject={forObject}
            reviewStatistic={reviewStatistic}
          />
        )
      case Types.photoBrowserTitle.PHOTO_BROWSER_ORGANIZATION_RECIPE_TITLE:
        return (
          <Telescope.F8OrganizationTitleHeader
            forRelationObject={forObject}
            photosListTask={photosListTask}
          />
        )
    }
    return null
  }

  render() {
    return (
      <div className="main-content-wrap main-content-wrap--full">
        <div id="super-container" className="content-container">
          <div className="container">
            <div className="js-media-landing_container">
              {this.renderTitle()}
              <div className="media-landing js-media-landing">
                {this.renderContent()}
                {this.renderFooter()}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEAPhotosBrowserLayout)
