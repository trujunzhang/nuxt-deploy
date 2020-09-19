import * as React from 'react'
import * as Telescope from '@appComponents/index'
import * as Types from '@app/types'

interface IIEAPhotosPreviewProps {
  previewDisabled: boolean
  previewImageSrc: string
  onUploadImagePressed: any
  onDeletePreviewPressed: () => any
}

export class IEAPhotosPreview extends React.Component<IIEAPhotosPreviewProps, {}> {
  renderDeleteForPreview() {
    return (
      <div className="photo-box_actions photo-box_actions--right">
        <a
          onClick={this.props.onDeletePreviewPressed}
          className="photo-box_action-link show-tooltip">
          <span
            id="icon_24X24"
            className="icon icon--24-trash icon--size-24 icon--inverse icon--fallback-inverted delete-photo">
            <svg className="icon_svg">
              <path d="M5 7V5a1 1 0 0 1 1-1h4V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h4a1 1 0 0 1 1 1v2H5zm13 12a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V8h12v11zm-8-8H9v8h1v-8zm5 0h-1v8h1v-8z" />
            </svg>
          </span>
          <span className="tooltip-wrapper">
            <span className="tooltip">{'Delete'}</span>
          </span>
        </a>
      </div>
    )
  }

  renderPreview() {
    const { previewImageSrc } = this.props
    // console.log('previewImageSrc: ', previewImageSrc)
    return (
      <ul className="uploaded-photos js-uploaded-photos photo-box-grid--inline-block photo-box-grid--wide">
        <li className="uploaded-photo">
          <div className="photo-caption-box photo-box js-photo-box photo-box--interactive">
            <img
              className="photo-caption-img js-photo-caption-img photo-box-img"
              src={previewImageSrc}
            />

            {this.renderDeleteForPreview()}
          </div>
        </li>
      </ul>
    )
  }

  render() {
    return (
      <div className="post-upload-container no-js-hidden">
        <Telescope.F8AppAlertSection />

        <div className="arrange arrange--middle finish-upload-header">
          <div className="arrange_unit">
            <div id="upload-title--success" className="upload-title biz-uploader">
              <span id="icon_18X18" className="icon icon--18-checkmark icon--size-18 icon--success">
                <svg className="icon_svg">
                  <path d="M7.232 14.273L1.93 8.97a1 1 0 1 1 1.413-1.414l3.89 3.89 7.424-7.426a1 1 0 0 1 1.414 1.414l-8.837 8.84z" />
                </svg>
              </span>
              <h3 className="alternate inline-block">
                {'Perfect!'}
                <b className="margin-left-4">{'Next, submit your photo.'}</b>
              </h3>
            </div>
          </div>

          {this.renderConfirmButton()}
        </div>

        {this.renderPreview()}
      </div>
    )
  }

  renderConfirmButton() {
    const { previewDisabled, onUploadImagePressed } = this.props
    return (
      <div className="arrange_unit arrange arrange--middle arrange--18 finish-social-media-container">
        <div className="arrange_unit">
          <button
            disabled={previewDisabled}
            onClick={onUploadImagePressed}
            className="ybtn ybtn-primary finish-upload-btn"
            type="submit"
            value="submit">
            <span>{'Finish'}</span>
          </button>
        </div>
      </div>
    )
  }
}
