import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { timeout } from '@appActions/index' // '@app/library' //  '@app/actions
import { removeSelectedPhoto } from '@web/actions'
import { showAlertMessage } from '@appActions/index' // from '@web/actions'
import { connect } from 'react-redux'
import { Photos } from '@app/library' //  '@app/libs'

interface IF8PhotosCollectionViewStateProps {
  currentUser: IParseModelUsers
}

interface IF8PhotosCollectionViewDispatchProps {
  showAlertMessageAction: ShowAlertMessageActionFunc
  removeSelectedPhotoAction: any
}

interface IF8PhotosCollectionViewProps
  extends IF8PhotosCollectionViewDispatchProps,
  IF8PhotosCollectionViewStateProps {
  objectSchemaName: string
  forObject: any
  photoTitleType: string
  photos: IParseModelPhotos[]
  onOwnPhotoForRecipes?: any
  showAlertSection: boolean
}

interface IF8PhotosCollectionViewWithRouterProps {
  router: IWebAppRouterProps
}

type F8PhotosCollectionViewPropsWithRouter = IF8PhotosCollectionViewProps &
  IF8PhotosCollectionViewWithRouterProps

interface IF8PhotosCollectionViewState {
  selectedPhoto: ParseModelPhotoWithNull
  showRemoveConfirmDialog: boolean
  photosCache: IParseModelPhotos[]
}

function mapDispatchToProps(dispatch) {
  return {
    removeSelectedPhotoAction: (object) => dispatch(removeSelectedPhoto(object)),
    showAlertMessageAction: (message: IAlertMessage) => dispatch(showAlertMessage(message))
  }
}

function mapStateToProps(store) {
  return {
    currentUser: store.authSession.user
  }
}

@(withRouter as any)
class F8PhotosCollectionView extends React.Component<
IF8PhotosCollectionViewProps,
IF8PhotosCollectionViewState
> {
  constructor(props: IF8PhotosCollectionViewProps) {
    super(props)
    this.state = {
      // Delete Photo.
      selectedPhoto: null,
      showRemoveConfirmDialog: false,
      photosCache: props.photos
    }
  }

  onShowRemoveConfirmDialogPress = (photo: IParseModelPhotos) => {
    this.setState({
      selectedPhoto: photo,
      showRemoveConfirmDialog: true
    })
  }
  onCloseRemoveConfirmDialogPress = () => {
    this.setState({
      showRemoveConfirmDialog: false
    })
  }

  async onConfirmDeletePhoto() {
    const { selectedPhoto } = this.state
    if (!!selectedPhoto) {
      await this.onTrashIconPress(selectedPhoto)
    }
  }

  async onTrashIconPress(photo: IParseModelPhotos) {
    const { removeSelectedPhotoAction, showAlertMessageAction, currentUser } = this.props

    if (!!currentUser) {
      let errorMessage = null
      try {
        await Promise.race([removeSelectedPhotoAction(photo), timeout(15000)])
      } catch (e) {
        const message = e.message || e
        if (message !== 'Timed out' && message !== 'Canceled by user') {
          errorMessage = message
        }
      } finally {
        this.onCloseRemoveConfirmDialogPress()
        if (!!errorMessage) {
          showAlertMessageAction({
            type: Types.alertType.ALERT_TYPE_ERROR,
            text: errorMessage
          })
        } else {
          const nextPhotosCache = Photos.removePhotoFromList(this.state, photo)
          this.setState({
            photosCache: nextPhotosCache
          })
          showAlertMessageAction({
            type: Types.alertType.ALERT_TYPE_SUCCESS,
            text: 'Remove the photo successfully!'
          })
        }
      }
    }
  }

  render() {
    const {
      photoTitleType,
      forObject,
      objectSchemaName,
      onOwnPhotoForRecipes,
      showAlertSection
    } = this.props
    const { photosCache } = this.state

    return (
      <div className="media-landing_gallery photos">
        {showAlertSection && <Telescope.F8AppAlertSection />}

        <ul className="photo-box-grid photo-box-grid--highlight photo-box-grid--small clearfix lightbox-media-parent">
          {photosCache.map((photo: IParseModelPhotos, index: number) => {
            return (
              <Telescope.F8PhotosCollectionItemView
                key={`${photo.id}-${index}`}
                photoTitleType={photoTitleType}
                objectSchemaName={objectSchemaName}
                forObject={forObject}
                photo={photo}
                onOwnPhotoForRecipes={onOwnPhotoForRecipes}
                onShowRemoveConfirmDialogPress={this.onShowRemoveConfirmDialogPress}
              />
            )
          })}
        </ul>
        {this.state.showRemoveConfirmDialog && (
          <div className="body-overlay" style={{ display: 'block' }} />
        )}
        {this.state.showRemoveConfirmDialog && this.renderRemoveConfirmDialog()}
      </div>
    )
  }

  renderRemoveConfirmDialog() {
    const width = 960 // window.innerWidth
    const left = (width - 427) / 2
    return (
      <div
        className="ypop"
        id="delete-photo-popup"
        style={{ position: 'absolute', left, top: '50px' }}>
        <div className="ypop-content clearfix" id="delete-review-draft-popup-content">
          <div className="ypop-title" id="delete-review-draft-popup-title">
            <div onClick={this.onCloseRemoveConfirmDialogPress} className="ypop-close">
              {'×'}
            </div>
            <h2>{'Confirmation'}</h2>
          </div>
          <div className="ypop-inner clearfix" id="delete-review-draft-popup-inner">
            {'Are you sure you would like to delete this photo?'}
          </div>
          <div className="ypop-footer clearfix" id="delete-review-draft-popup-footer">
            <div className="ypop-buttons">
              <button
                onClick={this.onConfirmDeletePhoto.bind(this)}
                type="submit"
                value="submit"
                className="ybtn ybtn-primary ybtn-small">
                <span>Yes</span>
              </button>
              <a onClick={this.onCloseRemoveConfirmDialogPress}>No</a>
            </div>
          </div>
          <a className="offscreen ypop-close-offscreen">Close popup</a>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(F8PhotosCollectionView)
