import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBPhoto } from 'ieattatypes/types/index'
import { photos, loadPhotos } from '~/database/data/Photos'
import { uploadPhotos } from '~/database/event/Photos'

@Component({
  components: {}
})
export default class Index extends Vue {
  public headers: Array<object> = [
    {
      text: 'Url',
      value: 'url'
    },
    {
      text: 'PhotoType',
      value: 'photoType'
    },
    {
      text: 'GeoHash',
      value: 'geoHash'
    }
  ]

  public items: Array<IFBPhoto> = loadPhotos()

  public search?: string = ''

  public loading?: boolean = false

  async importToFirebase () {
    this.loading = true
    await uploadPhotos(this.$fireStore)
    this.loading = false
  }
}
