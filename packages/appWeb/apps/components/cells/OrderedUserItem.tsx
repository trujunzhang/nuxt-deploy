import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { Link } from '@web/server/routes'
import { AppLinks } from '@appUtils/index'

interface IOrderedUserItemProps {
  listTask: IListWithPhotosDictTask
  peopleInEvent: IParseModelPeopleInEvent
}

interface IOrderedUserItemWithRouterProps {
  router: IWebAppRouterProps
}

type OrderedUserItemPropsWithRouter = IOrderedUserItemProps & IOrderedUserItemWithRouterProps

interface IOrderedUserItemState {}

@(withRouter as any)
export class OrderedUserItem extends React.Component<IOrderedUserItemProps, IOrderedUserItemState> {
  renderLeft() {
    const { peopleInEvent, listTask } = this.props
    const { user } = peopleInEvent
    return (
      <Telescope.F8ImagesSlideShowView
        altValue={user.displayName}
        forObject={user}
        objectSchemaName={Types.model.PARSE_USERS}
        imageSize={30}
        listPhotosDict={listTask.listPhotosDict}
      />
    )
  }

  renderStory() {
    const { peopleInEvent } = this.props
    const { user } = peopleInEvent
    return (
      <div className="media-story">
        <ul className="user-passport-info">
          <li className="user-name">
            <Link prefetch route={AppLinks.getOrderedUserLink(user, peopleInEvent)}>
              <a className="user-display-name title-font-weight-bold" id="dropdown_user-name">
                {user.username}
              </a>
            </Link>
          </li>
        </ul>

        <div className="tag-18x18_flame-dd5114">
          <small>
            <Telescope.FormattedRelative value={peopleInEvent.updatedAt} />
          </small>
        </div>
      </div>
    )
  }

  renderRightBottom() {
    return (
      <ul className="user-passport-stats">
        <li className="friend-count">
          <span id="people_in_event_item_span" className="icon icon--18-friends icon--size-18">
            <svg className="icon_svg">
              <g>
                <path d="M7.904 9.43l-2.098 4.697a.9.9 0 0 1-1.612 0L2.096 9.43a.902.902 0 0 1 .806-1.305h4.196c.67 0 1.105.705.806 1.305zM5 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                <path
                  d="M15.904 9.43l-2.098 4.697a.89.89 0 0 1-.806.498.89.89 0 0 1-.806-.498L10.096 9.43a.902.902 0 0 1 .806-1.305h4.195c.67 0 1.106.705.807 1.305zM13 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                  opacity=".502"
                />
              </g>
            </svg>
          </span>
          <b>0</b>
        </li>
        <li className="review-count">
          <span id="people_in_event_item_span" className="icon icon--18-review icon--size-18">
            <svg className="icon_svg">
              <path d="M13 3H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1.505 9.643l-2.526-1.55L6.526 12.7 7 9.934 5 7.977l2.766-.404L8.97 4.7l1.264 2.873L13 7.977l-2 1.957.495 2.71z" />
            </svg>
          </span>
          <b>0</b>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <li>
        <div className="ypassport ypassport-slim media-block">
          {this.renderLeft()}
          {this.renderStory()}
        </div>
      </li>
    )
  }
}
