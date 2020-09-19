import * as Telescope from '@appComponents/index'
import * as React from 'react'

interface IF8PhotosSelectLeftPanelProps {
  onNextIconClick: any
  photoNavBarModel: IPhotoNavBarModel
}

export class F8PhotosSelectLeftPanel extends React.Component<IF8PhotosSelectLeftPanelProps, {}> {
  render() {
    const { photoNavBarModel } = this.props

    const { hasNextIcon, photoSource, photoAlt } = photoNavBarModel
    const linkProps = hasNextIcon
      ? {
          onClick: this.props.onNextIconClick
        }
      : {}

    return (
      <div className="media-details-grid_main">
        <div className="media js-media-photo">
          <a {...linkProps}>
            <img key={photoAlt} alt={photoAlt} className="photo-box-img" src={photoSource} />
          </a>
        </div>

        <Telescope.F8PhotosSelectLeftPanelFooterView
          photoNavBarModel={this.props.photoNavBarModel}
        />
      </div>
    )
  }
}
