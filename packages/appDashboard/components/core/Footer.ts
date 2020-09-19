
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {
  }
})
export default class DashboardCoreFooter extends Vue {
   private links: Array<object>=[
     {
       href: '#',
       text: 'Creative Tim'
     },
     {
       href: '#',
       text: 'About Us'
     },
     {
       href: '#',
       text: 'Blog'
     },
     {
       href: '#',
       text: 'Licenses'
     }
   ]
}
