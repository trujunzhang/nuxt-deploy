import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { Router } from '@web/server/routes'
import { AppLinks } from '@appUtils/index'
import { showAlertMessage } from '@appActions/index' // from '@web/actions'
import { writeOnlineParseObject } from '@web/actions'
import { WebEditFormHelper } from '@appDatabase/index' // '@app/library' //  '@app/database'
import * as Types from '@app/types'
import { SaveParseEditFormHelper } from '@appCompEvents/index' // '@app/library' //  '@app/component-events'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { editModelActions } from '@appRedux/index' //from '@app/library' //  '@app/redux'
import { ReducerHelper } from '@app/library' //  '@app/libs'

interface IIEAEditEventLayoutStateProps {
  editModel: IEditModelState
}

interface IIEAEditEventLayoutDispatchProps {
  actions: any

  writeOnlineParseObjectAction: WriteOnlineParseObjectActionFunc
  showAlertMessageAction: ShowAlertMessageActionFunc
}

interface IIEAEditEventLayoutProps
  extends IIEAEditEventLayoutStateProps,
  IIEAEditEventLayoutDispatchProps {
  pageForm: string

  forObject: IParseModelEvents

  onCancelPress: () => any
}

interface IIEAEditEventLayoutState {
  value: any
  pageForm: string
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

class IEAEditEventLayout extends React.Component<
  IIEAEditEventLayoutProps,
  IIEAEditEventLayoutState
  > {
  constructor(props: IIEAEditEventLayoutProps, context) {
    super(props)
    const { pageForm, forObject } = props
    if (!forObject.restaurant) {
      throw new Error('Editing events need a restaurant instance!')
    }
    this.state = {
      pageForm,
      value: {
        displayName: forObject.displayName || '',
        eventWhat: forObject.want || ''
      }
    }
    props.actions.toggleEditModelType({
      tag: Types.menuMore.MENU_ITEM_ADD_OR_EDIT_EVENT,
      model: forObject,
      editModelType: pageForm
    })
    props.actions.onEditModelFormFieldChange({
      field: 'displayName',
      value: forObject.displayName || '',
      ignoreValidation: true
    })
    props.actions.onEditModelFormFieldChange({
      field: 'eventWhat',
      value: forObject.want || '',
      ignoreValidation: true
    })
  }

  /**
   * ### componentWillReceiveProps
   * As the properties are validated they will be set here.
   */
  componentWillReceiveProps(nextProps: IIEAEditEventLayoutProps) {
    this.setState({
      value: {
        displayName: nextProps.editModel.form.fields.displayName,
        eventWhat: nextProps.editModel.form.fields.eventWhat
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
    if (value.eventWhat !== '') {
      this.props.actions.onEditModelFormFieldChange({
        field: 'eventWhat',
        value: value.eventWhat,
        ignoreValidation: false
      })
    }
    this.setState({
      value
    })
  }

  renderLeft() {
    return (
      <Telescope.EditEventForm
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
      objectSchemaName: Types.model.PARSE_EVENTS
    })
    await new SaveParseEditFormHelper().saveParseModel({
      objectSchemaName: Types.model.PARSE_EVENTS,
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
    const event: IParseModelWithDisplayName = {
      id: forObject.id,
      uniqueId: forObject.uniqueId,
      displayName: this.state.value.displayName
    }
    const nextPath = AppLinks.getEventLink(event)
    Router.pushRoute(nextPath).then(() => window.scrollTo(0, 0))
  }

  renderLeftButton() {
    const isDisabled = ReducerHelper.editModelDisabled(this.props)
    const buttonTitle = ReducerHelper.isNewModelFormPage(this.props)
      ? 'Create an Event'
      : 'Update the Event'
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
        <a onClick={this.props.onCancelPress}>{'Cancel'}</a>
      </div>
    )
  }

  renderContent() {
    return (
      <div className="yform create-event-container js-event-create-form" id="create_event">
        {this.renderLeft()}

        <label>When</label>

        <div className="js-event-set-date event-calendar-fields">
          <div className="js-event-start-date-container date-container">
            <Telescope.F8CalenderView
              field="start"
              forObject={this.props.forObject}
              actions={this.props.actions}
              editModel={this.props.editModel}
            />
          </div>

          <strong className="create-event-date-middle-link">to</strong>

          <div className="js-event-end-date-container date-container">
            <Telescope.F8CalenderView
              field="end"
              forObject={this.props.forObject}
              actions={this.props.actions}
              editModel={this.props.editModel}
            />
          </div>
        </div>

        {this.renderLeftButton()}
      </div>
    )
  }

  renderTitle() {
    const formTitle = ReducerHelper.isNewModelFormPage(this.props)
      ? 'Submit an Event'
      : 'Update the Event'
    return (
      <div className="section-header">
        <h2>{formTitle}</h2>
      </div>
    )
  }

  render() {
    return (
      <div className="main-content-wrap main-content-wrap--full">
        <div id="super-container" className="content-container">
          <Telescope.F8AppAlertSection />

          <div className="container create-event-page">
            {this.renderTitle()}

            <div className="clearfix layout-block layout-a">
              <div className="column column-alpha ">{this.renderContent()}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEAEditEventLayout)
