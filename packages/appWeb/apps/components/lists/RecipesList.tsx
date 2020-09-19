import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { PaginationTerms } from '@appUtils/index'

import {
  loadRecipesListForCreator,
  loadRecipesListForEvent,
  loadRecipesListForRestaurant
} from '@web/actions'

import { FilterPosts } from '@appFilter/index'
import * as Types from '@app/types'
import { connect } from 'react-redux'

interface IRecipesListStateProps {
  listContainerTasks: IListContainerTasks
}

interface IRecipesListDispatchProps {
  loadRecipesListForRestaurantAction: LoadParseObjectsListActionFunc
  loadRecipesListForEventAction: LoadParseObjectsListActionFunc
  loadRecipesListForCreatorAction: LoadParseObjectsListActionFunc
}

interface IRecipesListProps extends IRecipesListStateProps, IRecipesListDispatchProps {
  showTitle: boolean
  showRightTime: boolean
  recipeListType: string

  forRestaurant?: IParseModelRestaurants
  forEvent?: IParseModelEvents
  forCreator?: IParseModelUsers
  orderedUser?: IParseModelUsers
}

interface IRecipesListState {
  terms: any
  listTask: IListWithPhotosDictTask
}

function mapDispatchToProps(dispatch) {
  return {
    loadRecipesListForRestaurantAction: (params: IWebParseObjectsListBaseParams) =>
      dispatch(loadRecipesListForRestaurant(params)),
    loadRecipesListForEventAction: (params: IWebParseObjectsListBaseParams) =>
      dispatch(loadRecipesListForEvent(params)),
    loadRecipesListForCreatorAction: (params: IWebParseObjectsListBaseParams) =>
      dispatch(loadRecipesListForCreator(params))
  }
}

function mapStateToProps(store) {
  return {
    listContainerTasks: store.listContainerTasks
  }
}

class RecipesList extends React.Component<IRecipesListProps, IRecipesListState> {
  constructor(props: IRecipesListProps) {
    super(props)
    const { forRestaurant, forEvent, forCreator, orderedUser } = props
    const terms = PaginationTerms.generateTermsForRecipesList({
      orderedUserId: !!orderedUser ? orderedUser.id : null,
      eventId: !!forEvent ? forEvent.id : null,
      restaurantId: !!forRestaurant ? forRestaurant.id : null,
      creatorId: !!forCreator ? forCreator.id : null
    })
    this.state = {
      terms,
      listTask: FilterPosts.getDefaultListTask(terms) as IListWithPhotosDictTask
    }
  }

  componentWillReceiveProps(nextProps: IRecipesListProps) {
    this.setState({
      listTask: FilterPosts.byListId(
        nextProps,
        this.state.terms,
        this.state.listTask
      ) as IListWithPhotosDictTask
    })
  }

  componentDidMount() {
    const { recipeListType } = this.props
    const { terms, listTask } = this.state
    switch (recipeListType) {
      case Types.common.RECIPES_LIST_FOR_RESTAURANT_PAGE:
        this.props.loadRecipesListForRestaurantAction({ listTask, terms })
        break
      case Types.common.RECIPES_LIST_FOR_EVENT_PAGE:
        this.props.loadRecipesListForEventAction({ listTask, terms })
        break
      case Types.common.RECIPES_LIST_FOR_LOGGED_USER_PAGE:
        this.props.loadRecipesListForCreatorAction({ listTask, terms })
        break
    }
  }

  renderRecipesList() {
    const { listTask } = this.state
    const { results, ready } = listTask
    if (ready) {
      return (
        <Telescope.BaseRecipesListPage recipes={results} listPhotosDict={listTask.listPhotosDict} />
      )
    }
    return <Telescope.F8LoadingView />
  }

  render() {
    const { showTitle } = this.props

    return (
      <div className="ysection">
        {showTitle && <Telescope.F8SectionHeaderTitle title={'Recently Ordered Recipes'} />}

        {this.renderRecipesList()}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipesList)
