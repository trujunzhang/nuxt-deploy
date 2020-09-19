import VueRouter, { Route, RawLocation, NavigationGuard } from 'vue-router'
import firebase from 'firebase'
import { IFBPhoto, IFBRestaurant } from 'ieattatypes/types/index'
// import { v2 as cloudinary } from 'cloudinary'
import { FBCollections } from '~/database/constant'

export type SinglePhotoCB = (items: Array<IFBPhoto>, len: number) => void

export class PhotoHelper {
  static getSelectedIndex (
    $route: Route,
    items: Array<IFBPhoto>
  ) {
    const photoId = $route.query.select as string
    const index = items.findIndex((x: IFBPhoto) => {
      return x.uniqueId === photoId
    })

    return index
  }

  static fetchPage (
    restaurant: IFBRestaurant,
    $fireStore: firebase.firestore.Firestore,
    cb: SinglePhotoCB
  ) {
    const nextItem : Array<IFBPhoto> = []
    const nextQuery = $fireStore.collection(FBCollections.Photos)
      .where('restaurantId', '==', restaurant.uniqueId)
    nextQuery.get().then(
      (documentSnapshots) => {
        // console.log('.........')
        documentSnapshots.forEach((doc) => {
          // console.log(`${doc.id} => ${doc.data()}`)
          nextItem.push(doc.data() as IFBPhoto)
        })
        // this.items = nextItem
        // this.photosLen = documentSnapshots.size
        cb(nextItem, documentSnapshots.size)
      }
    ).catch((ex) => {
      cb(nextItem, 0)
    })
  }

  /**
   * https://github.com/cloudinary/cloudinary_npm
   * @param imageData
   * @param note
   */
  static async uploadImage (imageData:string, note:string) {
    // const image = await cloudinary.uploader.upload(imageData)
    let x = 0
  }
}
