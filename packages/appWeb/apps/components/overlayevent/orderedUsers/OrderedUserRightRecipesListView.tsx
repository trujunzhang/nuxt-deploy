import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { PeopleInEvent } from '@app/library' //  '@app/libs'
import { ProgressBar } from 'react-bootstrap'

import {
  dismissAlertMessage,
  showAlertMessage,
  showAppOverlay,
} from '@appActions/index' // from '@web/actions'
import {
  loadPeopleInEventList,
  writeOnlineParseObject
} from '@web/actions'
import { timeout } from '@appActions/index' // '@app/library' //  '@app/actions
import * as Types from '@app/types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { editModelActions } from '@appRedux/index' //from '@app/library' //  '@app/redux'
import { AppTable, PeopleInEventHelper } from '@appUtils/index'

interface IOrderedUserRightRecipesListViewStateProps {
  editModel: IEditModelState
  currentUser: IParseModelUsers
}

interface IOrderedUserRightRecipesListViewDispatchProps {
  actions: any
  writeOnlineParseObjectAction: WriteOnlineParseObjectActionFunc
  showAlertMessageAction: ShowAlertMessageActionFunc
  peopleInEventListTask: any
  loadPeopleInEventListAction: LoadParseObjectsListActionFunc

  dismissAlertMessageAction: any
  showAppOverlayAction: any
}

interface IOrderedUserRightRecipesListViewProps
  extends IOrderedUserRightRecipesListViewStateProps,
  IOrderedUserRightRecipesListViewDispatchProps {
  peopleInEventTerms: any
  leftUsersListTask: any
  recipesInRestaurantTask: any
  peopleInEventListDict: IPeopleInEventListDict
  selectedUserId: string
  forObject: IParseModelEvents
}

interface IOrderedUserRightRecipesListViewState {
  orderedRecipeIds: string[]
}

function mapDispatchToProps(dispatch) {
  return {
    // Edit Model
    actions: bindActionCreators(editModelActions, dispatch),
    writeOnlineParseObjectAction: (params: IWriteWebParseObjectParams) =>
      dispatch(writeOnlineParseObject(params)),
    showAlertMessageAction: (message: IAlertMessage) => dispatch(showAlertMessage(message)),
    // List Tasks
    loadPeopleInEventListAction: (params: IWebParseObjectsListBaseParams) =>
      dispatch(loadPeopleInEventList(params)),
    dismissAlertMessageAction: () => dispatch(dismissAlertMessage()),
    showAppOverlayAction: (object) => dispatch(showAppOverlay(object))
  }
}

function mapStateToProps(store, ownProps) {
  return {
    editModel: store.editModel,
    currentUser: store.authSession.user
  }
}

class OrderedUserRightRecipesListView extends React.Component<
  IOrderedUserRightRecipesListViewProps,
  IOrderedUserRightRecipesListViewState
  > {
  constructor(props: IOrderedUserRightRecipesListViewProps, context) {
    super(props)
    this.state = {
      orderedRecipeIds: PeopleInEvent.getOrderedRecipeIds(props)
    }
  }

  componentWillReceiveProps(nextProps: IOrderedUserRightRecipesListViewProps) {
    this.setState({
      orderedRecipeIds: PeopleInEvent.getOrderedRecipeIds(nextProps)
    })
  }

  renderLeftMenuTitle() {
    return (
      <div className="titled-nav-header">
        <div className="arrange arrange--top">
          <div className="arrange_unit arrange_unit--fill">
            <div className="titled-nav-header_content">
              <h3>{`Recipes List`}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }

  async onAddRemoveRecipePress(hasOrdered: boolean, recipe: IParseModelRecipes) {
    if (!!this.props.currentUser) {
      await this.addRemoveRecipePress(hasOrdered, recipe)
    } else {
      AppTable.showLoginUI(this.props, true, true)
    }
  }

  async addRemoveRecipePress(hasOrdered: boolean, selectedRecipe: IParseModelRecipes) {
    const {
      writeOnlineParseObjectAction,
      showAlertMessageAction,
      peopleInEventListTask,
      peopleInEventTerms
    } = this.props

    const { orderedRecipeIds } = this.state

    const updatedModel: IParseModelPeopleInEvent = PeopleInEventHelper.updatePeopleInEventParseInstance(
      {
        // Relation
        peopleInEventListDict: this.props.peopleInEventListDict,
        event: this.props.forObject,
        // Current selection.
        selectedUserId: this.props.selectedUserId,
        hasOrdered,
        orderedRecipeIds,
        selectedRecipe
      }
    )

    this.props.dismissAlertMessageAction()
    this.props.actions.updateCurrentRequestRecipeId(selectedRecipe.id)

    let errorMessage = null
    const parseObject: IWriteWebParseObjectParams = {
      editModelType: Types.editModel.MODEL_FORM_TYPE_EDIT,
      objectSchemaName: Types.model.PARSE_PEOPLE_IN_EVENTS,
      model: updatedModel
    }
    try {
      await Promise.race([writeOnlineParseObjectAction(parseObject), timeout(15000)])
    } catch (e) {
      this.props.actions.updateModelFailure(e)
      const message = e.message || e
      if (message !== 'Timed out' && message !== 'Canceled by user') {
        errorMessage = message
      }
    } finally {
      if (!!errorMessage) {
        showAlertMessageAction({
          type: Types.alertType.ALERT_TYPE_ERROR,
          text: errorMessage
        })
      } else {
        this.props.actions.updateModelSuccess()
        const eventType = hasOrdered ? 'Removed' : 'Saved'
        showAlertMessageAction({
          type: Types.alertType.ALERT_TYPE_SUCCESS,
          text: `${eventType} the ordered recipe successfully!`
        })
        this.props.loadPeopleInEventListAction({
          listTask: peopleInEventListTask,
          terms: peopleInEventTerms
        })
      }
    }
  }

  renderRecipeActionButtons = (recipe: IParseModelRecipes, index: number) => {
    const hasOrdered = PeopleInEvent.hasOrdered(this.state, recipe)

    const { editModel } = this.props
    const requestRecipeId = editModel.form.currentRequestRecipeId
    const actionClass = 'ybtn ybtn--small'

    const hasRequestRecipe = requestRecipeId === recipe.id

    return (
      <ul className="recipe-event-buttons">
        <li className="recipes-event-item inline-block">
          <button
            className={actionClass}
            disabled={hasRequestRecipe}
            onClick={() => {
              this.onAddRemoveRecipePress(hasOrdered, recipe)
            }}
            id={hasOrdered ? 'remove' : 'add'}>
            <span
              id="review_item_footer_buttons_panel_span"
              className="icon icon--18-useful-outline icon--size-18 icon--active-inverse button-content u-space-r-half">
              <svg className="icon_svg">
                <path d="M9 17c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM9 2C5.14 2 2 5.14 2 9s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm2 8.392V12H7v-1.608a3.982 3.982 0 0 1-2-3.445 4 4 0 0 1 8 0c0 1.477-.81 2.752-2 3.445zM8 5.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zm1.003 9.747h-.006A1.997 1.997 0 0 1 7 13h4a1.997 1.997 0 0 1-1.997 1.997z" />
              </svg>
            </span>
            <span className="vote-type">{hasOrdered ? 'Remove' : 'Add'}</span>
          </button>
          {hasRequestRecipe && (
            <div className="ordered-recipe-event-progress">
              <ProgressBar active now={100} />
            </div>
          )}
        </li>
      </ul>
    )
  }

  renderRows() {
    const { recipesInRestaurantTask } = this.props
    const { results } = recipesInRestaurantTask
    return (
      <div className="ysection">
        <div className="titled-nav js-titled-nav">
          <div className="titled-nav_menus">
            <div className="titled-nav_menu">
              {this.renderLeftMenuTitle()}

              <ul className="ylist ylist-bordered">
                {results.map((recipe: IParseModelRecipes, index: number) => {
                  return (
                    <Telescope.RecipesItem
                      key={recipe.id}
                      listPhotosDict={recipesInRestaurantTask.listPhotosDict}
                      recipe={recipe}
                      index={index}
                      renderActionButtons={this.renderRecipeActionButtons}
                      showRightTime={true}
                    />
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderEmptySection() {
    const { leftUsersListTask } = this.props
    const { results, ready, totalCount } = leftUsersListTask
    if (ready && results.length === 0) {
      return <Telescope.F8EmptySection title={`No Recipes in the restaurant!`} text="" />
    }
    return null
  }

  render() {
    return (
      <div className="ysection">
        {this.renderRows()}

        <div className="u-space-t2 u-space-b2">{this.renderEmptySection()}</div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderedUserRightRecipesListView)
