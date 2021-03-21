import { Component, Prop, Vue } from 'vue-property-decorator'
import { OnUploadImageHookFunc } from '~/components/screens/uploadPhoto/type'

@Component({
  components: {}
})
export default class PhotoForm extends Vue {
  @Prop({}) onUploadImageHook!: OnUploadImageHookFunc
  private image: string | ArrayBuffer | null = null

  onFileChanged (e) {
    const files = e.target.files || e.dataTransfer.files
    if (!files.length) {
      return
    }
    this.createImage(files[0])
  }

  createImage (file) {
    const reader = new FileReader()
    const vm = this

    reader.onload = (e: any) => {
      vm.image = e.target.result
      vm.onUploadImageHook(e.target.result)
    }
    reader.readAsDataURL(file)
  }
}
