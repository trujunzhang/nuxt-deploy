import * as React from 'react'
import { AppLinks } from '@appUtils/index'

interface IF8OrganizationTitleHeaderProps {
  forRelationObject: any
  photosListTask: IListWithPhotosDictTask
}

export class F8OrganizationTitleHeader extends React.Component<
  IF8OrganizationTitleHeaderProps,
  {}
> {
  onEditPhotosPress() {}

  render() {
    const { forRelationObject, photosListTask } = this.props
    return (
      <div className="js-media-landing_header media-landing_header">
        <div className="section-header media-header">
          <div className="arrange arrange--12 arrange--bottom">
            <div className="arrange_unit arrange_unit--fill">
              <ul className="breadcrumbs">
                <li>
                  <span>{'The following photos maybe own the recipe'}</span>
                </li>
              </ul>

              <h1 className="media-header_title h2">
                {`${AppLinks.calculateTotalCount(photosListTask)} photos by ${
                  forRelationObject.displayName
                }`}
              </h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
