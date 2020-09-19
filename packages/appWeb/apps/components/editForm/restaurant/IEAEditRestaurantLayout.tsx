import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { Router } from '@web/server/routes'

import { AppLinks, LeafletHelper, AppBackLinker } from '@appUtils/index'

import { showAlertMessage } from '@appActions/index' // from '@web/actions'
import { writeOnlineParseObject } from '@web/actions'
import { WebEditFormHelper } from '@appDatabase/index' // '@app/library' //  '@app/database'

import * as Types from '@app/types'
import { SaveParseEditFormHelper } from '@appCompEvents/index' // '@app/library' //  '@app/component-events'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editModelActions } from '@appRedux/index' //from '@app/library' //  '@app/redux'
import { ReducerHelper } from '@app/library' //  '@app/libs'

interface IIEAEditRestaurantLayoutStateProps {
  editModel: IEditModelState
}

interface IIEAEditRestaurantLayoutDispatchProps {
  actions: any
  showAlertMessageAction: ShowAlertMessageActionFunc
  writeOnlineParseObjectAction: WriteOnlineParseObjectActionFunc
}

interface IIEAEditRestaurantLayoutProps
  extends IIEAEditRestaurantLayoutStateProps,
  IIEAEditRestaurantLayoutDispatchProps {
  forObject: IParseModelRestaurants
  pageForm: string
  onEditCancelPress?: () => any
}

interface IIEAEditRestaurantLayoutState {
  mapInfo: IRestaurantMapInfo
  value: any
  showFixMapMarker: boolean
}

function mapDispatchToProps(dispatch) {
  return {
    // Edit Model
    actions: bindActionCreators(editModelActions, dispatch),
    writeOnlineParseObjectAction: (object: IWriteWebParseObjectParams) =>
      dispatch(writeOnlineParseObject(object)),
    showAlertMessageAction: (message: IAlertMessage) => dispatch(showAlertMessage(message))
  }
}

function mapStateToProps(store, ownProps) {
  return {
    editModel: store.editModel
  }
}

class IEAEditRestaurantLayout extends React.Component<
  IIEAEditRestaurantLayoutProps,
  IIEAEditRestaurantLayoutState
  > {
  constructor(props: IIEAEditRestaurantLayoutProps, context) {
    super(props)
    const { forObject, pageForm } = props
    const mapInfo: IRestaurantMapInfo = LeafletHelper.getMapInfo({
      model: forObject,
      location: forObject.geoLocation,
      showEditButton: false,
      autoPopup: false,
      onlyMap: false
    })
    this.state = {
      mapInfo,
      showFixMapMarker: false,
      // showFixMapMarker: true,
      value: {
        displayName: forObject.displayName
      }
    }
    props.actions.toggleEditModelType({
      tag: Types.menuMore.MENU_ITEM_ADD_OR_EDIT_RESTAURANT,
      model: forObject,
      editModelType: pageForm
    })
    props.actions.onEditModelFormFieldChange({
      field: 'displayName',
      value: forObject.displayName,
      ignoreValidation: true
    })
    props.actions.onRestaurantFormAddressFieldChange(forObject)
  }

  /**
   * ### componentWillReceiveProps
   * As the properties are validated they will be set here.
   */
  componentWillReceiveProps(nextProps: IIEAEditRestaurantLayoutProps) {
    const model: IRestaurantObjectForMapInfo = {
      id: nextProps.forObject.id,
      uniqueId: nextProps.forObject.uniqueId,
      address: nextProps.editModel.form.fields.address,
      displayName: nextProps.editModel.form.fields.displayName
    }
    const mapInfo: IRestaurantMapInfo = LeafletHelper.getMapInfo({
      model,
      location: nextProps.editModel.form.fields,
      showEditButton: false,
      autoPopup: false,
      onlyMap: false
    })
    this.setState({
      mapInfo,
      value: {
        displayName: nextProps.editModel.form.fields.displayName
      }
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
      <Telescope.EditRestaurantForm
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
      objectSchemaName: Types.model.PARSE_RESTAURANTS
    })
    await new SaveParseEditFormHelper().saveParseModel({
      objectSchemaName: Types.model.PARSE_RESTAURANTS,
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
    const { forObject } = this.props
    const restaurant: IParseModelWithDisplayName = {
      id: forObject.id,
      uniqueId: forObject.uniqueId,
      displayName: this.state.value.displayName
    }
    const nextPath = AppLinks.getRestaurantLink(restaurant)
    Router.pushRoute(nextPath).then(() => window.scrollTo(0, 0))
  }

  onCancelPress = () => {
    AppBackLinker.appBack()
  }

  renderLeftButton() {
    const buttonTitle = ReducerHelper.isNewModelFormPage(this.props)
      ? 'Save Restaurant'
      : 'Submit Changes'
    const isDisabled = ReducerHelper.editModelDisabled(this.props)
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

  renderRight() {
    return (
      <div className="map-wrapper pull-right" id="fix-map-marker-section">
        <div className="map-container yelp-map-container">
          <Telescope.F8RestaurantMapSection
            restaurant={this.props.forObject}
            mapInfo={this.state.mapInfo}
          />
        </div>
        {this.renderRightBottom()}
      </div>
    )
  }

  onCloseFixMapMaker = () => {
    this.setState({
      showFixMapMarker: false
    })
  }

  renderRightBottom() {
    return (
      <a
        onClick={(e: any) => {
          this.setState({ showFixMapMarker: true })
        }}
        className="show-locator-popup pull-right">
        <span
          id="icon_18X18"
          className="icon icon--18-marker icon--size-18 icon--neutral-gray u-space-r-half">
          <svg className="icon_svg">
            <path d="M14 7A5 5 0 0 0 4 7c0 1.97 1.15 3.658 2.806 4.472h-.17L9 16l2.363-4.528h-.17C12.85 10.658 14 8.97 14 7zM9 5a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
          </svg>
        </span>
        {'Fix incorrect map marker'}
      </a>
    )
  }

  renderContent() {
    return (
      <div className="biz-attrib-form yform" id="biz_attrib_form">
        {this.renderRight()}

        {this.renderLeft()}
        {this.renderLeftButton()}
      </div>
    )
  }

  render() {
    const formTitle = ReducerHelper.isNewModelFormPage(this.props)
      ? 'Add a Restaurant'
      : 'Update Restaurant Details'
    return (
      <div>
        <div className="main-content-wrap main-content-wrap--full">
          <div id="super-container" className="content-container">
            <Telescope.F8AppAlertSection />

            <div className="container">
              <div className="clearfix layout-block layout-full" id="update-biz-details">
                <div className="column column-alpha ">
                  <h2>{formTitle}</h2>

                  {this.renderContent()}
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.showFixMapMarker && (
          <React.Fragment>
            <div className="body-overlay" style={{ display: 'block' }} />
            <Telescope.RestaurantsFixMapMarker
              onCloseFixMapMaker={this.onCloseFixMapMaker}
              forObject={this.props.forObject}
            />
          </React.Fragment>
        )}
        )
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEAEditRestaurantLayout)
