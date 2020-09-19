import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'

interface IIEAUserProfileRecipesLayoutProps {
  userStatistic: IUserStatisticResult
  userProfile: IParseModelUsers
}

@(withRouter as any)
export class IEAUserProfileRecipesLayout extends React.Component<
  IIEAUserProfileRecipesLayoutProps,
  {}
> {
  render() {
    const { userProfile } = this.props
    return (
      <div className="user-details-bookmarks_content js-user-details-bookmarks_content">
        <Telescope.RecipesList
          forCreator={userProfile}
          recipeListType={Types.common.RECIPES_LIST_FOR_LOGGED_USER_PAGE}
          showTitle={true}
          showRightTime={false}
        />
      </div>
    )
  }
}
