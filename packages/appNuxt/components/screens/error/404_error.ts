import { Component, Prop, Vue } from 'vue-property-decorator'
import Header404 from '~/components/screens/error/404_header.vue'
import PhotoFooter from '~/components/screens/footer/footer_photo.vue'

@Component({
  components: {
    Header404,
    PhotoFooter
  }
})
export default class Error404 extends Vue {

}
