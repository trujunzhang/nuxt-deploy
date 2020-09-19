import * as React from 'react'
import { Link } from '@web/server/routes'
import * as Types from '@app/types'
import { AppConstants } from '@app/types'
import { AppLinks } from '@appUtils/index'

interface IIEAAddPhotosTopProps {
  modelType: string
  forObject: any
}

export class IEAAddPhotosTop extends React.Component<IIEAAddPhotosTopProps, {}> {
  render() {
    const { modelType, forObject } = this.props
    const { objectSchemaName } = AppConstants.realmObjects[modelType]
    switch (objectSchemaName) {
      case Types.model.PARSE_RESTAURANTS:
      case Types.model.PARSE_RECIPES:
        return this.renderCommon()
    }
    return this.renderForUser()
  }

  renderCommon() {
    const { modelType, forObject } = this.props
    const { objectSchemaName } = AppConstants.realmObjects[modelType]
    return (
      <div id="user_biz_photo_intro">
        <h2>
          <Link
            prefetch
            route={AppLinks.geDetailedModelLinkByObjectSchemaName(objectSchemaName, forObject)}>
            {`${forObject.displayName}:`}
          </Link>
          {' Add Photos'}
        </h2>

        <Link prefetch route={AppLinks.getPhotosBrowserLink(objectSchemaName, forObject)}>
          {'View all photos'}
        </Link>

        <br />
        <br />
      </div>
    )
  }

  renderForUser() {
    const { forObject } = this.props
    return (
      <div className="section-header media-header">
        <div className="arrange arrange--12 arrange--bottom">
          <div className="arrange_unit arrange_unit--fill">
            <ul className="breadcrumbs">
              <li>
                <Link
                  prefetch
                  route={AppLinks.geDetailedModelLinkByObjectSchemaName(
                    Types.model.PARSE_USERS,
                    forObject
                  )}>
                  {forObject.username}
                </Link>
              </li>
              <li>
                <span
                  id="icon_24X24"
                  className="icon icon--24-chevron-right icon--size-24 icon--neutral-gray u-space-r-half">
                  <svg className="icon_svg">
                    <path d="M9.525 5.636L8.11 7.05 13.06 12l-4.95 4.95 1.415 1.414L15.89 12 9.524 5.636z" />
                  </svg>
                </span>
                {'Profile photos'}
              </li>
            </ul>

            <h1 className="media-header_title h2">Add photos</h1>
          </div>
        </div>
      </div>
    )
  }
}
