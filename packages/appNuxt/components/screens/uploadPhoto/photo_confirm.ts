import { Component, Prop, Vue } from 'vue-property-decorator'
import { OnToggleFormStepFunc } from '~/components/screens/uploadPhoto/type'
import { PhotoHelper } from '~/database/photo_helper'

@Component({
  components: {
  }
})
export default class PhotoConfirm extends Vue {
  @Prop({}) image!: string
  @Prop({}) onToggleFormStep!: OnToggleFormStepFunc
  public note: string = ''

  async onUploadClick () {
    await PhotoHelper.uploadImage(this.image, this.note)
  }

  mounted () {
    const x = this.image
  }
}
