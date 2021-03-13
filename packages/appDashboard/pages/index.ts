import { Component, Prop, Vue } from 'vue-property-decorator'
import { uploadEvents } from '~/database/event/Events'
import { uploadUsers } from '~/database/event/Users'
import { uploadRestaurants } from '~/database/event/Restaurants'
import { uploadWaiters } from '~/database/event/Waiters'
import { uploadPeopleInEvents } from '~/database/event/PeopleInEvents'
import { uploadPhotos } from '~/database/event/Photos'
import { uploadReviews } from '~/database/event/Reviews'
import { uploadRecipes } from '~/database/event/Recipes'

@Component({
  components: {}
})
export default class Index extends Vue {

  public loading?: boolean = false

  async importToFirebase () {
    this.loading = true
    // step1: Upload users
    await uploadUsers(this.$fire.auth, this.$fire.firestore)
    // step2: Upload restaurants
    await uploadRestaurants(this.$fire.auth, this.$fire.firestore)
    await uploadRecipes(this.$fire.auth, this.$fire.firestore)
    // step3: Upload events
    await uploadEvents(this.$fire.auth, this.$fire.firestore)
    await uploadWaiters(this.$fire.auth, this.$fire.firestore)
    await uploadPeopleInEvents(this.$fire.auth, this.$fire.firestore)
    // step4: Upload photos
    await uploadPhotos(this.$fire.auth, this.$fire.firestore)
    await uploadReviews(this.$fire.auth, this.$fire.firestore)
    this.loading = false
  }
}
