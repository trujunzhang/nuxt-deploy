import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { Router } from '@web/server/routes'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { SaveParseEditFormHelper } from '@appCompEvents/index' // '@app/library' //  '@app/component-events'
import { AppLinks, AppBackLinker } from '@appUtils/index'
import { WebEditFormHelper } from '@appDatabase/index' // '@app/library' //  '@app/database'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import {
  loadPhotosBrowser,
  ownPhotoForRecipe,
  writeOnlineParseObject
} from '@web/actions'
import {
  showAlertMessage,
} from '@appActions/index' // from '@web/actions'

import { timeout } from '@appActions/index' // '@app/library' //  '@app/actions

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { editModelActions } from '@appRedux/index' //from '@app/library' //  '@app/redux'
import { ReducerHelper } from '@app/library' //  '@app/libs'

// https://github.com/text-mask/text-mask
const numberMask = createNumberMask({
  prefix: '$',
  allowDecimal: true,
  integerLimit: 4
})

interface IIEAEditRecipeWithPhotosLayoutStateProps {
  currentUser: IParseModelUsers
  editModel: IEditModelState
}

interface IIEAEditRecipeWithPhotosLayoutDispatchProps {
  actions: any
  loadPhotosBrowserAction: any
  writeOnlineParseObjectAction: WriteOnlineParseObjectActionFunc
  ownPhotoForRecipeAction: any
  showAlertMessageAction: ShowAlertMessageActionFunc
}

interface IIEAEditRecipeWithPhotosLayoutProps
  extends IIEAEditRecipeWithPhotosLayoutStateProps,
  IIEAEditRecipeWithPhotosLayoutDispatchProps {
  recipe: IParseModelRecipes
  forRelationObject: IParseModelRestaurants
  pageForm: string
  photosListTask: IListWithPhotosDictTask
  photosTerms: IParseQueryPhotoTerm
}

interface IIEAEditRecipeWithPhotosLayoutWithRouterProps {
  router: IWebAppRouterProps
}

type IEAEditRecipeWithPhotosLayoutPropsWithRouter = IIEAEditRecipeWithPhotosLayoutProps &
  IIEAEditRecipeWithPhotosLayoutWithRouterProps

interface IIEAEditRecipeWithPhotosLayoutState {
  value: any
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(editModelActions, dispatch),
    loadPhotosBrowserAction: (terms) => dispatch(loadPhotosBrowser(terms)),
    writeOnlineParseObjectAction: (object: IWriteWebParseObjectParams) =>
      dispatch(writeOnlineParseObject(object)),
    ownPhotoForRecipeAction: (params: IOwnPhotoForRecipeParams) =>
      dispatch(ownPhotoForRecipe(params)),
    showAlertMessageAction: (message: IAlertMessage) => dispatch(showAlertMessage(message))
  }
}

function mapStateToProps(store, ownProps) {
  return {
    currentUser: store.authSession.user,
    editModel: store.editModel
  }
}

@(withRouter as any)
class IEAEditRecipeWithPhotosLayout extends React.Component<
IIEAEditRecipeWithPhotosLayoutProps,
IIEAEditRecipeWithPhotosLayoutState
> {
  constructor(props: IIEAEditRecipeWithPhotosLayoutProps, context) {
    super(props)

    const { recipe } = props
    this.state = {
      value: {
        displayName: recipe.displayName,
        price: recipe.price
      }
    }
    props.actions.toggleEditModelType({
      tag: Types.menuMore.MENU_ITEM_ADD_OR_EDIT_RECIPE,
      model: recipe,
      editModelType: props.pageForm
    })
    props.actions.onEditModelFormFieldChange({
      field: 'displayName',
      value: recipe.displayName,
      ignoreValidation: true
    })
    props.actions.onEditModelFormFieldChange({
      field: 'price',
      value: recipe.price,
      ignoreValidation: true
    })
  }

  /**
   * ### onChange
   *
   * As the user enters keys, this is called for each key stroke.
   * Rather then publish the rules for each of the fields, I find it
   * better to display the rules required as long as the field doesn't
   * meet the requirements.
   * *Note* that the fields are validated by the authReducer
   */
  onChange(value) {
    if (value.displayName !== '') {
      this.props.actions.onEditModelFormFieldChange({
        field: 'displayName',
        value: value.displayName,
        ignoreValidation: false
      })
    }
    this.setState({
      value
    })
  }

  renderLeft() {
    return (
      <Telescope.EditRecipeForm
        form={this.props.editModel.form}
        value={this.state.value}
        onChange={this.onChange.bind(this)}
      />
    )
  }

  async onButtonPress() {
    const { writeOnlineParseObjectAction, showAlertMessageAction, editModel, actions } = this.props
    const writeParseParams: IWriteWebParseObjectParams = WebEditFormHelper.getParams({
      editModel,
      objectSchemaName: Types.model.PARSE_RECIPES
    })
    await new SaveParseEditFormHelper().saveParseModel({
      objectSchemaName: Types.model.PARSE_RECIPES,
      actions,
      showAlertMessageAction,
      writeParseParams,
      writeOnlineParseObjectAction,
      onSaveParseModelHook: this.onSaveParseModelHook
    })
  }

  onSaveParseModelHook = () => {
    this.jumpToDetailedPage()
  }

  jumpToDetailedPage() {
    const { recipe } = this.props
    const linkModel: IParseModelWithDisplayName = {
      id: recipe.id,
      uniqueId: recipe.uniqueId,
      displayName: this.state.value.displayName
    }
    const nextLink = AppLinks.getOrderedRecipeLink(linkModel)
    Router.pushRoute(nextLink).then(() => window.scrollTo(0, 0))
  }

  onCancelPress = () => {
    AppBackLinker.appBack()
  }

  renderLeftButton() {
    const isDisabled = ReducerHelper.editModelDisabled(this.props)
    const buttonTitle = ReducerHelper.isNewModelFormPage(this.props)
      ? 'Create an Recipe'
      : 'Update the Recipe'
    return (
      <div className="form-footer">
        <button
          onClick={this.onButtonPress.bind(this)}
          disabled={isDisabled}
          id="submit-biz-details-changes"
          name="action_submit"
          type="submit"
          value="Submit Changes"
          className="ybtn ybtn--primary">
          <span>{buttonTitle}</span>
        </button>
        <a onClick={this.onCancelPress}>{'Cancel'}</a>
      </div>
    )
  }

  // onGoBack = () => {
  //   const { recipe } = this.props
  //   const linkModel: IParseModelWithDisplayName = {
  //     id: recipe.id,
  //     uniqueId: recipe.uniqueId,
  //     displayName: this.state.value.displayName
  //   }
  //   const nextLink = AppLinks.getOrderedRecipeLink(linkModel)
  //   Router.pushRoute(nextLink).then(() => window.scrollTo(0, 0))
  // }

  onPriceChange = (e) => {
    const nextValue = e.target.value
    console.log('nextValue : ', nextValue)

    const newValue = nextValue.replace('$', '')

    console.log('newPrice: ', newValue)

    this.props.actions.onEditModelFormFieldChange({
      field: 'price',
      value: newValue,
      ignoreValidation: false
    })
    this.setState({
      value: Object.assign({}, this.state.value, {
        price: newValue
      })
    })
  }

  renderContent() {
    return (
      <div className="biz-attrib-form yform" id="biz_attrib_form">
        {this.renderLeft()}

        <label>Price</label>

        <div className="js-event-set-date event-calendar-fields">
          <div className="js-event-start-date-container date-container">
            <MaskedInput
              mask={numberMask}
              guide={false}
              placeholder="Enter a price number"
              className="form-control"
              type="text"
              value={this.state.value.price}
              onChange={this.onPriceChange}
            />
          </div>
        </div>

        {this.renderLeftButton()}
      </div>
    )
  }

  renderTitle() {
    const formTitle = ReducerHelper.isNewModelFormPage(this.props)
      ? 'Submit new  Recipe'
      : 'Update the Recipe'
    return (
      <div className="section-header">
        <h2>{formTitle}</h2>
      </div>
    )
  }

  async onOwnPhotoForRecipes(photo: IParseModelPhotos) {
    const { ownPhotoForRecipeAction, showAlertMessageAction } = this.props
    const originalModel = this.props.editModel.form.originModel
    let errorMessage = null
    const params: IOwnPhotoForRecipeParams = {
      recipeUniqueId: originalModel.id,
      photoId: photo.id
    }
    try {
      await Promise.race([ownPhotoForRecipeAction(params), timeout(15000)])
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
        this.props.loadPhotosBrowserAction(this.props.photosTerms)
      }
    }
  }

  render() {
    const editModelType = this.props.editModel.form.editModelType
    const originalModel = this.props.editModel.form.originModel
    return (
      <div className="main-content-wrap main-content-wrap--full">
        <div id="super-container" className="content-container">
          <Telescope.F8AppAlertSection />

          <div className="container">
            <div className="clearfix layout-block layout-full" id="update-biz-details">
              <div className="column column-alpha ">
                {this.renderTitle()}
                {this.renderContent()}
              </div>
            </div>
          </div>

          {editModelType === Types.editModel.MODEL_FORM_TYPE_EDIT && (
            <Telescope.IEAPhotosBrowserLayout
              forObject={originalModel}
              onOwnPhotoForRecipes={this.onOwnPhotoForRecipes.bind(this)}
              showAlertSection={false}
              objectSchemaName={Types.model.PARSE_RECIPES}
              photosListTask={this.props.photosListTask}
              photoTitleType={Types.photoBrowserTitle.PHOTO_BROWSER_ORGANIZATION_RECIPE_TITLE}
              barType={Types.paginationNavBar.PAGINATION_NAVIGATION_BAR_FOR_NORMAL}
            />
          )}
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEAEditRecipeWithPhotosLayout)
