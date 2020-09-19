import * as Telescope from '@appComponents/index'
import * as React from 'react'
import * as Types from '@app/types'
import OnClickOut from 'react-onclickoutside'

interface IF8PhotosSelectPageProps {
  onCloseIconPress: any
}

@(OnClickOut as any)
export class F8PhotosSelectPage extends React.Component<IF8PhotosSelectPageProps, {}> {
  handleClickOutside(e) {
    this.props.onCloseIconPress(e)
  }

  render() {
    return (
      <Telescope.F8PhotosContentWithNavBar
        photoBrowserType={Types.common.PHOTO_BROWSER_TYPE_FOR_POPUP}
        contentClass="media-details_container media-details_container--embed media-details_container--with-sidebar"
      />
    )
  }
}
