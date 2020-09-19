import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { AppLinks } from '@appUtils/index'
import { Link } from '@web/server/routes'
import * as Types from '@app/types'

interface IEditUserProfilePhotoProps {
  userProfile: IParseModelUsers
}

interface IEditUserProfilePhotoState {}

export class EditUserProfilePhoto extends React.Component<
  IEditUserProfilePhotoProps,
  IEditUserProfilePhotoState
> {
  render() {
    const { userProfile } = this.props
    return (
      <div className="ysection">
        <h4>
          {'Your Profile Photo'}
          <strong>
            <Link prefetch route={AppLinks.getAddPhotoLink(Types.model.PARSE_USERS, userProfile)}>
              {'(Add/Edit)'}
            </Link>
          </strong>
        </h4>

        <Telescope.F8ImagesSlideShowView
          altValue={userProfile.displayName}
          forObject={userProfile}
          objectSchemaName={Types.model.PARSE_USERS}
          imageSize={250}
          slideShowType={Types.imageSideShow.SLIDE_SHOW_VIEW_TYPE_EDIT_USER}
          listPhotosDict={userProfile.listPhotosDict || {}}
        />
      </div>
    )
  }
}
