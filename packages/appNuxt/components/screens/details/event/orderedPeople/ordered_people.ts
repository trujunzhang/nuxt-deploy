import { Component, Prop, Vue } from 'vue-property-decorator'
import { IFBEvent, IFBPeopleInEvent, IFBRecipe, IFBUser } from 'ieattatypes/types/index'
import { FirestoreService } from '~/database/services/firestore_service'
import { FirestorePath } from '~/database/services/firestore_path'
import OrderedRecipes from '~/components/screens/details/event/orderedPeople/ordered_recipes.vue'

@Component({
  components: {
    OrderedRecipes
  }
})
export default class OrderedPeopleInEvent extends Vue {
  @Prop({}) event!: IFBEvent

  public peopleInEvents: Array<IFBPeopleInEvent> = []
  public recipes: Array<IFBRecipe> = []
  public users: Array<IFBUser> = []
  private isLoaded = false
  private isLoading = false

  showEmptyHint () {
    return this.isLoaded && this.peopleInEvents.length === 0
  }

  showSectionPage () {
    return this.isLoaded
  }

  getOrderedUser (item: IFBPeopleInEvent) {
    const obj = this.users.find(obj => obj.id === item.userId)
    return obj
  }

  async _fetchPage () {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    const nextItem = this.recipes.concat([])
    await FirestoreService.instance.collectionStream({
      query: new FirestorePath(this.$fire.firestore).getRecipesList(this.event.restaurantId),
      queryBuilder: (query: any) => {
        return query.orderBy('updatedAt', 'desc')
      },
      iterateDocumentSnapshots: (data: IFBRecipe) => {
        nextItem.push(data)
      }
    })
    this.recipes = nextItem
    const nextPeopleInEvents = this.peopleInEvents.concat([])
    await FirestoreService.instance.collectionStream({
      query: new FirestorePath(this.$fire.firestore).getPeopleInEventsList(this.event.uniqueId),
      queryBuilder: (query: any) => {
        return query.orderBy('updatedAt', 'desc')
      },
      iterateDocumentSnapshots: (data: IFBPeopleInEvent) => {
        nextPeopleInEvents.push(data)
      }
    })
    this.peopleInEvents = nextPeopleInEvents
    const nextUsers = this.users.concat([])
    await FirestoreService.instance.collectionStream({
      query: new FirestorePath(this.$fire.firestore).getUsersList(),
      queryBuilder: (query: any) => {
        return query.orderBy('updatedAt', 'desc')
      },
      iterateDocumentSnapshots: (data: IFBUser) => {
        nextUsers.push(data)
      }
    })
    this.users = nextUsers
    this.isLoaded = true
    this.isLoading = false
  }

  async mounted () {
    await this._fetchPage()
  }
}
