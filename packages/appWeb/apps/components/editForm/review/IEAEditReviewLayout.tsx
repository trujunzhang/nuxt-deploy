import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { withRouter } from 'next/router'
import * as Types from '@app/types'
import { AppConstants } from '@app/types'

import { SaveParseEditFormHelper } from '@appCompEvents/index' // '@app/library' //  '@app/component-events'
import { AppLinks, AppBackLinker } from '@appUtils/index'
import { routePage } from '@web/server/routesModels/utils'
import { Router } from '@web/server/routes'

import { WebEditFormHelper } from '@appDatabase/index' // '@app/library' //  '@app/database'
import { ReducerHelper } from '@app/library' //  '@app/libs'
import { showAlertMessage} from '@appActions/index' // from '@web/actions'
import { writeOnlineParseObject } from '@web/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { editModelActions } from '@appRedux/index' //from '@app/library' //  '@app/redux'

interface IIEAEditReviewLayoutStateProps {
  currentUser: IParseModelUsers
  editModel: IEditModelState
}

interface IIEAEditReviewLayoutDispatchProps {
  actions: any
  writeOnlineParseObjectAction: WriteOnlineParseObjectActionFunc
  showAlertMessageAction: ShowAlertMessageActionFunc
}

interface IIEAEditReviewLayoutProps
  extends IIEAEditReviewLayoutStateProps,
  IIEAEditReviewLayoutDispatchProps {
  reviewType: string
  routePageType: string
  review: IParseModelReviews
  forObject: any
}

interface IIEAEditReviewLayoutWithRouterProps {
  router: IWebAppRouterProps
}

type IEAEditReviewLayoutPropsWithRouter = IIEAEditReviewLayoutProps &
  IIEAEditReviewLayoutWithRouterProps

interface IIEAEditReviewLayoutState {
  value: any
  editReview: IParseModelReviews
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(editModelActions, dispatch),
    writeOnlineParseObjectAction: (object: IWriteWebParseObjectParams) =>
      dispatch(writeOnlineParseObject(object)),
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
class IEAEditReviewLayout extends React.Component<
IIEAEditReviewLayoutProps,
IIEAEditReviewLayoutState
> {
  constructor(props: IIEAEditReviewLayoutProps, context) {
    super(props)
    const { review: editReview } = props
    this.state = {
      editReview,
      value: {
        reviewRating: editReview.rate,
        reviewBody: editReview.body
      }
    }
    let pageForm: string = Types.editModel.MODEL_FORM_TYPE_EDIT
    switch (props.routePageType) {
      case routePage.ORGANIZATION_NEW_REVIEW: {
        pageForm = Types.editModel.MODEL_FORM_TYPE_NEW
        break
      }
      case routePage.ORGANIZATION_EDIT_REVIEW: {
        pageForm = Types.editModel.MODEL_FORM_TYPE_EDIT
        break
      }
    }
    props.actions.toggleEditModelType({
      tag: Types.menuMore.MENU_ITEM_ADD_OR_EDIT_REVIEW,
      model: editReview,
      editModelType: pageForm
    })
    props.actions.onEditModelFormFieldChange({
      field: 'reviewRating',
      value: editReview.rate,
      ignoreValidation: true
    })
    props.actions.onEditModelFormFieldChange({
      field: 'reviewBody',
      value: editReview.body,
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
    if (value.reviewBody !== '') {
      this.props.actions.onEditModelFormFieldChange({
        field: 'reviewBody',
        value: value.reviewBody,
        ignoreValidation: false
      })
    }
    this.setState({
      value
    })
  }

  async onButtonPress() {
    const { writeOnlineParseObjectAction, showAlertMessageAction, editModel, actions } = this.props
    const writeParseParams: IWriteWebParseObjectParams = WebEditFormHelper.getParams({
      editModel,
      objectSchemaName: Types.model.PARSE_REVIEWS
    })
    await new SaveParseEditFormHelper().saveParseModel({
      objectSchemaName: Types.model.PARSE_REVIEWS,
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
    const { reviewType, forObject } = this.props
    const { objectSchemaName } = AppConstants.realmObjects[reviewType]
    const backUrl = AppLinks.geDetailedModelLinkByObjectSchemaName(objectSchemaName, forObject)

    Router.pushRoute(backUrl)
  }

  onCancelPress = () => {
    AppBackLinker.appBack()
  }

  renderLeftButton() {
    const { editModel } = this.props
    const buttonDisabled = !editModel.form.isValid || editModel.form.isFetching
    const buttonTitle = ReducerHelper.isNewModelFormPage(this.props)
      ? 'Post Review'
      : 'Update the Review'
    return (
      <div className="ysection">
        <div className="arrange arrange--middle arrange--30">
          <div className="arrange_unit nowrap">
            <p className="action-buttons below-the-fold">
              <button
                onClick={this.onButtonPress.bind(this)}
                value="submit"
                disabled={buttonDisabled}
                className="ybtn ybtn--primary ybtn--small ybtn-full-responsive-small">
                <span>{buttonTitle}</span>
              </button>
              <a onClick={this.onCancelPress}>{'Cancel'}</a>
            </p>
          </div>
        </div>
        <small className="subtle-text">* You can always edit or remove reviews later.</small>
      </div>
    )
  }

  // onGoBack = () => {
  //   const { reviewType, forObject } = this.props
  //   const { objectSchemaName } = AppConstants.realmObjects[reviewType]
  //   const backUrl = AppLinks.geDetailedModelLinkByObjectSchemaName(objectSchemaName, forObject)

  //   Router.pushRoute(backUrl)
  // }

  renderForm() {
    const { editReview } = this.state
    return (
      <div className="yform" id="review_rate_form">
        <div className="write-review integrated-rating-comment ysection js-war-compose_review-section expanded">
          <div>
            <label>Your review</label>
          </div>

          <div className="js-character-counter">
            <Telescope.EditReviewForm
              form={this.props.editModel.form}
              reviewRating={editReview.rate}
              actions={this.props.actions}
            />
          </div>
        </div>

        <div className="js-war-compose_survey-section ysection">{this.renderLeftButton()}</div>
      </div>
    )
  }

  renderContent() {
    const formTitle = ReducerHelper.isNewModelFormPage(this.props)
      ? 'Write a Review'
      : 'Update the Review'
    return (
      <div className="clearfix layout-block layout-a layout-border column--responsive">
        <div className="section-header">
          <h3 className="js-war_main-header">{formTitle}</h3>
        </div>
        {this.renderTopSection()}

        {this.renderForm()}
      </div>
    )
  }

  render() {
    return (
      <div className="main-content-wrap main-content-wrap--full js">
        <div id="super-container" className="content-container">
          <Telescope.F8AppAlertSection />

          {this.renderContent()}
        </div>
      </div>
    )
  }

  renderTopSection() {
    const { reviewType, review, forObject } = this.props
    switch (reviewType) {
      case 'restaurant':
        return <Telescope.EditReviewTopRestaurant review={review} forObject={forObject} />
      case 'recipe':
        return <Telescope.EditReviewTopRecipe forObject={forObject} />
      case 'event':
        return <Telescope.EditReviewTopEvent forObject={forObject} />
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEAEditReviewLayout)
