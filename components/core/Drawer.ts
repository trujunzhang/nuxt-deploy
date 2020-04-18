import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import { appConfigure as storeConfig } from '~/store'
import { menus } from '~/components/core/menu'
const appConfigure = namespace('appConfigure')

@Component({
  components: {}
})
export default class DashboardCoreDrawer extends Vue {
  @Prop({ default: false }) readonly expandOnHover: Boolean = false

  private items: Array<object> = menus

  @appConfigure.State
  public barColor!: string

  @appConfigure.State
  public barImage!: string

  get drawer () {
    return storeConfig.drawer
  }

  set drawer (payload: any) {
    storeConfig.SET_DRAWER(payload)
  }

  get computedItems () {
    return this.items.map(this.mapItem)
  }

  get profile () {
    return {
      avatar: true,
      group: '',
      title: this.$t('avatar'),
      children: [
        {
          href: '',
          title: this.$t('my-profile')
        },
        {
          to: '',
          title: this.$t('edit-profile')
        },
        {
          to: '',
          title: this.$t('settings')
        }
      ]
    }
  }

  // watch: {
  //   '$vuetify.breakpoint.smAndDown' (val) {
  //     this.$emit('update:expandOnHover', !val)
  //   }
  // },

  mapItem (item) {
    return {
      ...item,
      children: item.children ? item.children.map(this.mapItem) : undefined,
      title: this.$t(item.title)
    }
  }
}
