import { namespace } from 'vuex-class'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBEvent, IFBPhoto } from 'ieattatypes/types/index'
import { IAuthUser } from '~/database/models/auth_user_model'
import { FirestoreService } from '~/database/services/firestore_service'
import { FBCollections } from '~/database/constant'
import { getDetailEventLink } from '~/utils/linkHelper/detail'
import { ParseModelEvents } from '~/database/appModel/event'

const auth = namespace('auth')

@Component({
  components: {}
})
export default class EventForm extends Vue {
  @Prop({}) event!: IFBEvent
  @Prop({}) isNewEvent!: boolean
  public displayName: string = ''
  public want: string = ''
  public price: string = ''
  public showAlertMessage: boolean = false

  @auth.State
  public user!: IAuthUser | null

  getDetailEventUrl () {
    return getDetailEventLink(this.event)
  }

  getPhotoUrl (item: IFBPhoto) {
    if (item.originalUrl === '') {
      return require('~/assets/images/offline-sign-circular-band-label-sticker.png')
    }
    return item.originalUrl
  }

  async onSaveBtnClick () {
    // if (this.displayName.trim().length === 0) {
    //   this.showAlertMessage = true
    //   return
    // }
    // this.showAlertMessage = false
    // const lastEvent: IFBEvent = this.isNewEvent
    //   ? ParseModelEvents.emptyEvent((this.user as any), 'xxx') : this.event

    // const nextEvent: IFBEvent = ParseModelEvents.updateEvent(
    //   lastEvent,
    //   this.displayName,
    //   this.price
    // )
    // await FirestoreService.instance.setData(
    //   this.$fire.firestore,
    //   FBCollections.Events,
    //   nextEvent
    // )
    // await this.$router.push(this.getDetailEventUrl())
  }

  mounted () {
    if (!this.isNewEvent) {
      this.displayName = this.event.displayName
      this.want = this.event.want
    }
  }
}
