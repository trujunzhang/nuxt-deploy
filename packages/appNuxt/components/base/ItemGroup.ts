// Utilities
import kebabCase from 'lodash/kebabCase'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
const appConfigure = namespace('appConfigure')

interface IGroupItem {
    avatar: any
    group: any
    title: any
    children: any
}

@Component({
  inheritAttrs: false,
  components: {}
})
export default class ItemGroup extends Vue {
    @Prop({
      default: {
        avatar: undefined,
        group: undefined,
        title: undefined,
        children: []
      }
    })
    readonly item!: IGroupItem

    @Prop({ default: false }) readonly text!: boolean
    @Prop({ default: false }) readonly subGroup!: boolean

    @appConfigure.State
    public barColor!: string

    get children () {
      return this.item.children.map((item: any) => ({
        ...item,
        to: !item.to ? undefined : `${this.item.group}/${item.to}`
      }))
    }

    get computedText () {
      if (!this.item || !this.item.title) {
        return ''
      }

      let text = ''

      this.item.title.split(' ').forEach((val) => {
        text += val.substring(0, 1)
      })

      return text
    }

    get group () {
      return this.genGroup(this.item.children)
    }

    genGroup (children: any) {
      return children
        .filter(item => item.to)
        .map((item) => {
          const parent = item.group || this.item.group
          let group = `${parent}/${kebabCase(item.to)}`

          if (item.children) {
            group = `${group}|${this.genGroup(item.children)}`
          }

          return group
        })
        .join('|')
    }
}
