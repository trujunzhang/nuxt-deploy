import * as Telescope from '@appComponents/index'
import * as React from 'react'

import { CreatorHelper, Users } from '@app/library' //  '@app/libs'
import { AppLinks, PaginationTerms } from '@appUtils/index'
import * as Types from '@app/types'
import { Router } from '@web/server/routes'
import { FilterPosts } from '@appFilter/index'

import {
  loadPhotosBrowser,
  loadUsersWithoutAnonymousList,
  ownAnotherPhotoUser,
} from '@web/actions'
import {
  showAlertMessage
} from '@appActions/index' // from '@web/actions'
import { timeout } from '@appActions/index' // '@app/library' //  '@app/actions
import { connect } from 'react-redux'

interface IF8PhotosSelectRightPanelStateProps {
  listContainerTasks: IListContainerTasks
}

interface IF8PhotosSelectRightPanelDispatchProps {
  ownAnotherPhotoUserAction: OwnAnotherPhotoUserFunc
  loadPhotosBrowserAction: any
  loadUsersWithoutAnonymousListAction: LoadParseObjectsListActionFunc
  showAlertMessageAction: ShowAlertMessageActionFunc
}

interface IF8PhotosSelectRightPanelProps
  extends IF8PhotosSelectRightPanelStateProps,
  IF8PhotosSelectRightPanelDispatchProps {
  photoNavBarModel: IPhotoNavBarModel
  photoBrowserType: string
}

interface IF8PhotosSelectRightPanelState {
  listTask: any
  selectedUserIndex?: number
  isShowReselectUser: boolean
  selectedUserId: string | null
  isButtonSaving: boolean
  usersListTerm: any
}

function mapDispatchToProps(dispatch) {
  return {
    ownAnotherPhotoUserAction: (params: IOwnPhotoAnotherUserChangeParams) =>
      dispatch(ownAnotherPhotoUser(params)),
    loadPhotosBrowserAction: (terms) => dispatch(loadPhotosBrowser(terms)),
    loadUsersWithoutAnonymousListAction: (params: IWebParseObjectsListBaseParams) =>
      dispatch(loadUsersWithoutAnonymousList(params)),
    showAlertMessageAction: (message: IAlertMessage) => dispatch(showAlertMessage(message))
  }
}

function mapStateToProps(store) {
  return {
    listContainerTasks: store.listContainerTasks
  }
}

class F8PhotosSelectRightPanel extends React.Component<
  IF8PhotosSelectRightPanelProps,
  IF8PhotosSelectRightPanelState
  > {
  // public static defaultProps: Partial<F8PhotosSelectRightPanelPropsWithDefaults> = {
  // photoBrowserType: Types.common.PHOTOS_BROWSER_PAGE_NORMAL
  // }

  constructor(props: IF8PhotosSelectRightPanelProps) {
    super(props)
    const usersListTerm = PaginationTerms.generateTermsForUsersWithoutAnonymousList()
    const usersListTask = FilterPosts.getDefaultListTask(usersListTerm)
    this.state = {
      // different photo owner.
      isShowReselectUser: false,
      isButtonSaving: false,
      // users tasks.
      selectedUserId: null,
      usersListTerm,
      listTask: usersListTask
    }
    props.loadUsersWithoutAnonymousListAction({
      listTask: usersListTask,
      terms: usersListTerm
    })
  }

  componentWillReceiveProps(nextProps: IF8PhotosSelectRightPanelProps) {
    const newListTask = FilterPosts.byListId(
      nextProps,
      this.state.usersListTerm,
      this.state.listTask
    )
    const { selectedUserIndex, selectedUserId } = Users.getSelectedUserIndex(
      newListTask,
      nextProps.photoNavBarModel.selectedPhotoInfo
    )
    this.setState({
      listTask: newListTask,
      selectedUserIndex,
      selectedUserId
    })
    if (this.state.isShowReselectUser && this.state.selectedUserId !== selectedUserId) {
      this.setState({
        isShowReselectUser: false
      })
    }
  }

  render() {
    return (
      <div className="media-details-grid_side">
        <div className="media-details-grid_side-inner">
          <div className="media-info">
            {this.renderTopUserInfo()}
            {this.renderModifyPhotoOwner()}
          </div>

          <div className="media-info_footer">
            <div className="js-media_ad-container media_ad-container yloca--small" />
          </div>
        </div>
      </div>
    )
  }

  renderModifyPhotoOwner() {
    return (
      <div className="media-info_container section-reselect-owner">
        <div className="media-info_item voting-feedback clearfix">
          <div className="media-info_vote margin-top-8">
            <p className="voting-intro voting-prompt">{"Reselect this photo's owner?"}</p>

            <ul className="voting-buttons exclusive u-space-b2">{this.renderReselect()}</ul>

            {this.state.isShowReselectUser && this.renderUsersList()}
          </div>
        </div>
      </div>
    )
  }

  renderReselect() {
    return (
      <li className="voting-stat inline-block">
        <a
          onClick={() => {
            this.setState({
              isShowReselectUser: !this.state.isShowReselectUser
            })
          }}
          className="ybtn ybtn--small helpful">
          <span
            id="icon_18X18"
            className="icon icon--18-arrow-up icon--size-18 icon--currentColor button-content">
            <svg className="icon_svg">
              <path d="M2.002 16h13.996a9.87 9.87 0 0 0-5.66-2.786V12.08c.898-.655 1.733-1.75 1.79-2.46 1.016-.495 1.228-1.723.506-1.994l-.017.024c.326-.458.527-1.04.527-1.706 0-.863-.156-1.66-.79-2.182C11.914 2.72 10.998 2 9.934 2c-.625 0-1.198.25-1.656.664a.955.955 0 0 0-.612-.23c-.4 0-.747.268-.934.662-1.005.37-1.738 1.505-1.738 2.848 0 .615.154 1.186.417 1.66-.78.307-.52 1.477.463 2.015.057.71.89 1.804 1.79 2.46v1.133A9.87 9.87 0 0 0 2.003 16z" />
            </svg>
          </span>
          <span className="vote-type">Select another owner</span>
        </a>
      </li>
    )
  }

  renderAvatar() {
    const { selectedPhotoInfo } = this.props.photoNavBarModel
    const { displayName, currentPhoto } = selectedPhotoInfo
    const user: IParseModelUsers = CreatorHelper.fixCreatorForParseModel(currentPhoto)
    return (
      <Telescope.F8ImagesSlideShowView
        key={user.id}
        altValue={displayName}
        forObject={user}
        objectSchemaName={Types.model.PARSE_USERS}
        imageSize={30}
        listPhotosDict={this.props.listContainerTasks.usersPhotosDict}
      />
    )
  }

  onUserNamePress = () => {
    const { selectedPhotoInfo } = this.props.photoNavBarModel
    const { currentPhoto } = selectedPhotoInfo
    const user: IParseModelUsers = CreatorHelper.fixCreatorForParseModel(currentPhoto)
    const nextLink = AppLinks.geDetailedModelLinkByObjectSchemaName(Types.model.PARSE_USERS, user)

    Router.pushRoute(nextLink).then(() => window.scrollTo(0, 0))
  }

  renderTopUserInfo() {
    const { selectedPhotoInfo } = this.props.photoNavBarModel
    return (
      <div className="media-info_item media-info_user">
        <div className="photo-user-passport">
          <div className="ypassport ypassport-slim media-block">
            {this.renderAvatar()}

            <div className="media-story">
              <ul className="user-passport-info">
                <li className="user-name">
                  <a
                    className="user-display-name js-analytics-click"
                    onClick={this.onUserNamePress}
                    id="dropdown_user-name">
                    {selectedPhotoInfo.displayName}
                  </a>
                </li>
                <li>
                  <span className="selected-photo-upload-date time-stamp">
                    {selectedPhotoInfo.photoCreatedAtFormat}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderUsersList() {
    const { listTask, selectedUserIndex } = this.state
    const { results } = listTask
    return (
      <div className="yform">
        <div className="u-inline-block u-align-bottom">
          <div className="yselect">
            <select
              className="event-start-time-picker u-inline-block"
              onChange={(object: any) => {
                const selectId = object.target.value
                this.setState({ selectedUserId: selectId })
              }}
              name="starts_time"
              id="starts_time">
              {results.map((item, index) => {
                const isSelected = selectedUserIndex === index
                return (
                  <option key={item.id} selected={isSelected} value={item.id}>
                    {item.username}
                  </option>
                )
              })}
            </select>
            <span
              id="icon_14X14"
              className="icon icon--14-triangle-down icon--size-14 icon--currentColor u-triangle-direction-down yselect_arrow">
              <svg className="icon_svg">
                <path d="M7 9L3.5 5h7L7 9z" />
              </svg>
            </span>
          </div>

          <button
            id="create-event"
            name="action_submit"
            value="Submit"
            disabled={!this.state.selectedUserId || this.state.isButtonSaving}
            onClick={this.onOwnSelectedUserPress.bind(this)}
            className="ybtn ybtn--primary disable-on-submit js-submit-event">
            <span>Own Selected User</span>
          </button>
        </div>
      </div>
    )
  }

  async onOwnSelectedUserPress() {
    const { selectedUserId } = this.state
    const { selectedPhotoInfo } = this.props.photoNavBarModel
    const { photoId } = selectedPhotoInfo
    const { ownAnotherPhotoUserAction } = this.props
    this.setState({
      isButtonSaving: true
    })
    let errorMessage = null
    try {
      if (!!selectedUserId) {
        await Promise.race([ownAnotherPhotoUserAction({ photoId, selectedUserId }), timeout(15000)])
      }
    } catch (e) {
      const message = e.message || e
      if (message !== 'Timed out' && message !== 'Canceled by user') {
        errorMessage = message
      }
    } finally {
      this.setState({
        isButtonSaving: false,
        isShowReselectUser: false
      })
      if (!!errorMessage) {
        this.props.showAlertMessageAction({
          type: Types.alertType.ALERT_TYPE_ERROR,
          text: errorMessage
        })
      }
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(F8PhotosSelectRightPanel)
