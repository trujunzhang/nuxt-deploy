import * as React from 'react'
import Dropzone from '@appComponents/editForm/photo/add/dropzoneApi'
import * as Telescope from '@appComponents/index'

interface IIEADropFileFormProps {
  onBeforeDropHook: any
  onAfterDropHook: (file: any) => any
}

export class IEADropFileForm extends React.Component<IIEADropFileFormProps, {}> {
  onDrop(accepted, rejected) {
    if (accepted.length === 1) {
      const file = accepted[0]
      if (file) {
        this.props.onBeforeDropHook()
        const reader = new FileReader()
        reader.onloadend = () => {
          this.props.onAfterDropHook(file)
        }
        reader.readAsDataURL(file)
      }
    }
  }

  render(){
    return null;
  }

  // TODO: DJZHANG(2020)
  // render() {
  //   return (
  //     <div className="upload upload--photos js-html5-uploader hidden" style={{ display: 'block' }}>
  //       <Telescope.F8AppAlertSection />

  //       <Dropzone
  //         multiple={false}
  //         accept="image/jpeg, image/png"
  //         className="file-drop file-drop--big js-file-drop"
  //         onDrop={this.onDrop.bind(this)}>
  //         <div className="file-drop_area">
  //           <div className="file-drop_area-inner">
  //             <h1>{'Drag and drop your photos here'}</h1>

  //             <fieldset className="hr-line">
  //               <legend>OR</legend>
  //             </fieldset>

  //             <div className="file-browser js-file-browser">
  //               <button
  //                 type="submit"
  //                 value="submit"
  //                 className="ybtn ybtn--primary file-browser_button">
  //                 <span>{'Browse Files'}</span>
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </Dropzone>
  //     </div>
  //   )
  // }
}
