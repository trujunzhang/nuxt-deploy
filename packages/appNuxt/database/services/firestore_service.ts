import firebase from 'firebase/compat'
import { DocumentSnapshot, QuerySnapshot, CollectionReference, DocumentData, HttpsCallableResult } from 'firebase/firebase-storage-compat'
import { IFBPhoto, IFBRestaurant, IFBReview, IFBUser, IFBEvent, IFBRecipe, IFBUserStatistics } from 'ieattatypes/types/index'
import { FBCollections } from '~/database/constant'
import { getGeoHashForRestaurant } from '~/database/utils/geohash_utils'
import { FirestoreParams } from '~/database/services/firestore_params'

export type QueryBuilder = (query: any) => any
export type IterateDocumentSnapshots = (data: any) => void
export type DocumentSnapshotsEvent = (documentSnapshots: QuerySnapshot) => void

export class FirestoreService {
  static instance = new FirestoreService()

  async queryUserStatisticsByCreatorId (
    $fireFunction: firebase.functions.Functions,
    userId: string) : Promise<IFBUserStatistics| undefined> {
    // console.log('userId', userId)
    try {
      const results: HttpsCallableResult =
        await $fireFunction.httpsCallable(FirestoreParams.getUserStatisticFunctionName())({ userId })
      const userStatistics: IFBUserStatistics = results.data as IFBUserStatistics
      return userStatistics
    } catch (e) {
    }
  }

  queryByCreatorId (params: {
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
      restaurant: IFBRestaurant
    }) {
    const {
      query,
      restaurant
    } = params
    const restaurantGeoHash = getGeoHashForRestaurant(restaurant)
    return query
      // .where('geoHash', '==', restaurantGeoHash)
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
    model: IFBRestaurant | IFBPhoto | IFBReview | IFBRecipe | IFBEvent
  ) {
    const messageRef = $fireStore.collection(path).doc(model.uniqueId)
    await messageRef.set(model)
  }

  async getData (
    params: {
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

  async collectionStream (
    params: {
      query: CollectionReference<DocumentData>,
      queryBuilder: QueryBuilder,
      iterateDocumentSnapshots: IterateDocumentSnapshots,
      documentSnapshotsEvent?: DocumentSnapshotsEvent | null,
      emptyHint?: () => void
    }) {
    const {
      query,
      queryBuilder,
      iterateDocumentSnapshots,
      documentSnapshotsEvent,
      emptyHint
    } = params
    const documentSnapshots: QuerySnapshot = await queryBuilder(query).get()
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
