import * as Telescope from '@appComponents/index'
import * as React from 'react'
import { showAlertMessage } from '@appActions/index' // from '@web/actions'
import { ReducerHelper } from '@app/library' //  '@app/libs'
import * as Types from '@app/types'
import { withRouter } from 'next/router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { editModelActions } from '@appRedux/index' //from '@app/library' //  '@app/redux'
import { NewParseObjectGenerator } from '@appDatabase/index' // '@app/library' //  '@app/database'
import { UploadSinglePhoto } from '@web/actions/utils'
import { UploadFileHelper } from '@appParse/index' // '@app/library' //  '@app/parse'

interface IIEAAddPhotosFormStateProps {
  currentUser: IParseModelUsers
  editModel: IEditModelState
}

interface IIEAAddPhotosFormDispatchProps {
  actions: any
  showAlertMessageAction: ShowAlertMessageActionFunc
}

interface IIEAAddPhotosFormProps
  extends IIEAAddPhotosFormStateProps,
  IIEAAddPhotosFormDispatchProps {
  modelType: string
  forObject: any
}

interface IIEAAddPhotosFormWithRouterProps {
  router: IWebAppRouterProps
}

type IEAAddPhotosFormPropsWithRouter = IIEAAddPhotosFormProps & IIEAAddPhotosFormWithRouterProps

interface IIEAAddPhotosFormState {
  file: any
  localUploadFile: LocalUploadFileWithNull
  formType: string
  preview: any
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(editModelActions, dispatch),
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
class IEAAddPhotosForm extends React.Component<IIEAAddPhotosFormProps, IIEAAddPhotosFormState> {
  constructor(props: IIEAAddPhotosFormProps) {
    super(props)
    this.state = {
      formType: Types.common.UPLOAD_IMAGE_FILE_DROP,
      file: {},
      localUploadFile: null,
      preview: null
    }
  }

  async onButtonPress() {
    const { showAlertMessageAction } = this.props
    const { localUploadFile } = this.state
    if (!localUploadFile) {
      return
    }

    this.props.actions.updateModelRequest()
    let errorMessage = null
    const params: IWritePhotoWithFilesParams = {
      newPhotoInstance: NewParseObjectGenerator.generateNewParsePhotoObject(this.props),
      localUploadFile
    }
    try {
      const instance = new UploadSinglePhoto(params.newPhotoInstance)
      await instance.upload(params.localUploadFile)
      const action = instance.end()
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
        this.setState({
          file: {},
          formType: Types.common.UPLOAD_IMAGE_FILE_DROP
        })
        this.props.actions.updateModelSuccess()
        showAlertMessageAction({
          type: Types.alertType.ALERT_TYPE_SUCCESS,
          text: 'Uploaded the photo successfully!'
        })
      }
    }
  }

  render() {
    const { formType } = this.state
    switch (formType) {
      case Types.common.UPLOAD_IMAGE_FILE_DROP:
        return this.renderFileDrop()
      case Types.common.UPLOAD_IMAGE_FILE_PREVIEW:
        return this.renderFilePreview()
    }
    return null
  }

  renderFilePreview() {
    const isDisabled = ReducerHelper.editModelDisabled(this.props)
    return (
      <Telescope.IEAPhotosPreview
        previewDisabled={isDisabled}
        previewImageSrc={this.state.preview}
        onUploadImagePressed={this.onButtonPress.bind(this)}
        onDeletePreviewPressed={() => {
          this.setState({
            formType: Types.common.UPLOAD_IMAGE_FILE_DROP,
            file: {},
            localUploadFile: null,
            preview: null
          })
        }}
      />
    )
  }

  renderFileDrop() {
    return (
      <Telescope.IEADropFileForm
        onBeforeDropHook={() => {
          this.props.actions.enableEditModelEventAction()
        }}
        onAfterDropHook={(file: any) => {
          const formData: FormData = UploadFileHelper.getFormDataForWebbroswer(file)
          const localUploadFile: ILocalUploadFile = {
            formData
          }
          this.setState({
            formType: Types.common.UPLOAD_IMAGE_FILE_PREVIEW,
            file,
            localUploadFile,
            preview: URL.createObjectURL(file)
          })
        }}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IEAAddPhotosForm)
