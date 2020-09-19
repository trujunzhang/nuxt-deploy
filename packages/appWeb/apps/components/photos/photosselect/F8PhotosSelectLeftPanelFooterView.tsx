import * as React from 'react'

interface IF8PhotosSelectLeftPanelFooterViewProps {
  photoNavBarModel: PhotoNavBarModelWithNull
}

export class F8PhotosSelectLeftPanelFooterView extends React.Component<
  IF8PhotosSelectLeftPanelFooterViewProps,
  {}
> {
  // renderLeft() {
  //   const { photoNavBarModel } = this.props
  //   const { detailedLink } = photoNavBarModel
  //   return (
  //     <li>
  //       <Link prefetch route={detailedLink}>
  //         <a className="media-nav_link--browse-all">
  //           <span
  //             id="icon_18X18"
  //             className="icon icon--18-grid icon--size-18 icon--inverse icon--fallback-inverted u-space-r-half">
  //             <svg className="icon_svg">
  //               <path d="M10 15v-5h5v5h-5zm0-12h5v5h-5V3zm-7 7h5v5H3v-5zm0-7h5v5H3V3z" />
  //             </svg>
  //           </span>
  //           {'Browse all'}
  //         </a>
  //       </Link>
  //     </li>
  //   )
  // }

  renderMiddle() {
    const { photoNavBarModel } = this.props
    let photoIndex = 0
    let photosLength = 1

    if (!!photoNavBarModel) {
      photoIndex = photoNavBarModel.photoIndex
      photosLength = photoNavBarModel.photosLength
    }
    return (
      <li className="media-footer_count">
        <span className="media-count js-media-count">
          <span className="media-count_current">{photoIndex + 1}</span> of{' '}
          <span className="media-count_total">{photosLength}</span>
        </span>
      </li>
    )
  }

  render() {
    return (
      <div className="media-footer photo-box-overlay">
        <ul className="media-footer_inner">
          {/* {this.renderLeft()} */}

          {this.renderMiddle()}

          <li className="media-footer_actions">
            <ul className="media-actions">
              <li>
                <a className="photo-box_action-link send-to-friend">
                  <span
                    id="icon_18X18"
                    className="icon icon--18-share icon--size-18 icon--currentColor u-space-r1">
                    <svg className="icon_svg">
                      <path d="M17.714 6.43L13 10.356v-3.03c-1 0-5.097 1.47-6.286 3.62.274-3.08 4.286-5.5 6.286-5.5V2.5l4.714 3.93zM3 4v10h11v-2.5l1-1V15H2V3h8.5l-1 1H3z" />
                    </svg>
                  </span>
                  {'Share'}
                </a>
              </li>

              <li>
                <a className="photo-box_action-link send-compliment js-analytics-click">
                  <span
                    id="icon_18X18"
                    className="icon icon--18-compliment icon--size-18 icon--currentColor u-space-r1">
                    <svg className="icon_svg">
                      <path d="M14.5 6.75a5.5 5.5 0 0 0-11 0 5.495 5.495 0 0 0 2.993 4.892L5.5 16.75l3.505-2 3.495 2-.993-5.108A5.495 5.495 0 0 0 14.5 6.75zm-5.5 4c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z" />
                    </svg>
                  </span>
                  Compliment
                </a>
              </li>

              <li>
                <a className="photo-box_action-link js-flag-button test-flag-action-link show-tooltip">
                  <span
                    id="icon_18X18"
                    className="icon icon--18-flag icon--size-18 icon--inverse icon--fallback-inverted">
                    <svg className="icon_svg">
                      <path d="M6 10V3c4.976 1.098 4.024-1 8 0v7c-4.024-.976-3.024 1.024-8 0zM4 2h1v14H4V2z" />
                    </svg>
                  </span>
                  <span className="tooltip-wrapper tooltip-wrapper--right">
                    <span className="tooltip">Report Photo</span>
                  </span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}
