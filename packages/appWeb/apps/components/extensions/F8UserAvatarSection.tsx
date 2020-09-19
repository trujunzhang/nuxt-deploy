import * as Telescope from '@appComponents/index'
import * as React from 'react'
import * as Types from '@app/types'

interface IF8UserAvatarSectionProps {
  user: any
  sectionClass?: string
}

interface IF8UserAvatarSectionDefaultProps {
  sectionClass: string
}

type F8UserAvatarSectionPropsWithDefaults = IF8UserAvatarSectionProps &
  IF8UserAvatarSectionDefaultProps

export class F8UserAvatarSection extends React.Component<IF8UserAvatarSectionProps, {}> {
  public static defaultProps: Partial<F8UserAvatarSectionPropsWithDefaults> = {
    sectionClass: 'ordered-user-profile'
  }

  renderLeftUserAvatar() {
    const user = this.props.user || {
      displayName: ''
    }
    return (
      <Telescope.F8ImagesSlideShowView
        altValue={user.displayName}
        forObject={user}
        objectSchemaName={Types.model.PARSE_USERS}
        imageSize={215}
        slideShowType={Types.imageSideShow.SLIDE_SHOW_VIEW_TYPE_USER_AVATOR}
        listPhotosDict={user.listPhotosDict}
      />
    )
  }

  render() {
    const { sectionClass } = this.props as F8UserAvatarSectionPropsWithDefaults
    return (
      <div className={sectionClass}>
        <div className="user-profile_container">{this.renderLeftUserAvatar()}</div>
      </div>
    )
  }
}
