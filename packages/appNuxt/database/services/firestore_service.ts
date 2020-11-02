import firebase from 'firebase'
import { DocumentSnapshot, QuerySnapshot } from 'firebase/firebase-storage'
import { IFBPhoto, IFBRestaurant, IFBReview, IFBUser } from 'ieattatypes/types/index'
import { FBCollections } from '~/database/constant'
import { getGeoHashForRestaurant } from '~/database/utils/geohash_utils'

export type QueryBuilder = (query: any) => any
export type IterateDocumentSnapshots = (data: any) => void
export type DocumentSnapshotsEvent = (documentSnapshots: QuerySnapshot) => void

export class FirestoreService {
  static instance = new FirestoreService()

  queryByCreatorId (params:{
    query: any,
    userId: string
  }) {
    const {
      query,
      userId
    } = params
    return query.where('creatorId', '==', userId)
      .orderBy('updatedAt', 'desc')
  }

  queryPhotoByGeoHashFromRestaurant (
    params: {
      query: any,
      restaurant: IFBRestaurant}) {
    const {
      query,
      restaurant
    } = params
    const restaurantGeoHash = getGeoHashForRestaurant(restaurant)
    return query.where('geoHash', '==', restaurantGeoHash)
    // return query.where('geoHash', '>', restaurantGeoHash)
    // .orderBy('geoHash', 'desc')
      .orderBy('updatedAt', 'desc')
  }

  async updateUser (
    $fireStore: firebase.firestore.Firestore,
    model: IFBUser
  ) {
    const messageRef = $fireStore.collection(FBCollections.Users).doc(model.id)
    await messageRef.set(model)
  }

  async setData (
    $fireStore: firebase.firestore.Firestore,
    path: string,
    model: IFBRestaurant | IFBPhoto | IFBReview
  ) {
    const messageRef = $fireStore.collection(path).doc(model.uniqueId)
    await messageRef.set(model)
  }

  async getData (
    params:{
    $fireStore: firebase.firestore.Firestore,
    path: string,
    uniqueId: string,
    emptyHint?: () => void
    }) {
    const {
      $fireStore,
      path,
      uniqueId,
      emptyHint
    } = params
    const nextQuery = $fireStore.collection(path).doc(uniqueId)
    const documentSnapshot: DocumentSnapshot = await nextQuery.get()
    const data = documentSnapshot.data()
    if (emptyHint && (data === null || data === undefined)) {
      emptyHint()
    }
    return data
  }

  async snapshotList (
    params: {
      $fireStore: firebase.firestore.Firestore,
      path: string,
      queryBuilder: QueryBuilder,
      iterateDocumentSnapshots: IterateDocumentSnapshots,
      documentSnapshotsEvent?: DocumentSnapshotsEvent | null,
      emptyHint?: () => void
    }) {
    const {
      $fireStore,
      path,
      queryBuilder,
      iterateDocumentSnapshots,
      documentSnapshotsEvent,
      emptyHint
    } = params
    const query = $fireStore.collection(path)
    const nextQuery = queryBuilder(query)
    const documentSnapshots: QuerySnapshot = await nextQuery.get()
    const size = documentSnapshots.size
    // console.log('query length:', size)
    // const empty = documentSnapshots.empty
    if (documentSnapshotsEvent) {
      documentSnapshotsEvent(documentSnapshots)
    }
    if (emptyHint && size === 0) {
      emptyHint()
    }
    documentSnapshots.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`)
      iterateDocumentSnapshots(doc.data())
    })
  }
}
