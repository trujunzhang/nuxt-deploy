import VueRouter, { Route, RawLocation, NavigationGuard } from 'vue-router'
import firebase from 'firebase'
import { IFBPhoto, IFBRestaurant} from 'ieattatypes/types/index'
import axios, { AxiosPromise } from 'axios'
import { FBCollections } from '~/database/constant'
import { getGeoHashForRestaurant } from '~/database/geohash_utils'

export type SinglePhotoCB = (items: Array<IFBPhoto>, len: number) => void
export type OnUploadProgressFunc = (progressEvent) => void

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
    const restaurantGeoHash = getGeoHashForRestaurant(restaurant)
    const nextItem : Array<IFBPhoto> = []
    const nextQuery = $fireStore.collection(FBCollections.Photos)
      .where('geoHash', '>', restaurantGeoHash)
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

  static async savePhoto (
    $fireStore: firebase.firestore.Firestore,
    model: IFBPhoto
  ) {
    const messageRef = $fireStore.collection(FBCollections.Photos).doc(model.uniqueId)
    try {
      await messageRef.set(model)
      return true
      // eslint-disable-next-line no-empty
    } catch (e) {
      return false
    }
  }

  static prepareFormData (fileContents:string) {
    const preset = 'ieatta'
    const formData = new FormData()
    formData.append('upload_preset', preset)
    // formData.append("tags", this.tags); // Optional - add tag for image admin in Cloudinary
    formData.append('file', fileContents)
    return formData
  }

  /**
   * @param fileContents: data:image/png;base64;
   * @param onUploadProgress
   */
  static uploadImage (fileContents:string, onUploadProgress:OnUploadProgressFunc) :AxiosPromise {
    const cloudName = 'di3fvexj8'
    // this.fileContents = reader.result
    const formData = PhotoHelper.prepareFormData(fileContents)
    const cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/${cloudName}/upload`
    const requestObj:any = {
      url: cloudinaryUploadURL,
      method: 'POST',
      data: formData,
      onUploadProgress
      // (progressEvent) => {
      // console.log('progress', progressEvent)
      // this.progress = Math.round(
      //   (progressEvent.loaded * 100.0) / progressEvent.total
      // )
      // console.log(this.progress)
      // bind "this" to access vue state during callback
      // }
    }
    // show progress bar at beginning of post
    // this.showProgress = true
    return axios(requestObj)
    // .then((response) => {
    //   // this.results = response.data
    //   // console.log(this.results)
    //   // console.log('public_id', this.results.public_id)
    // })
    // .catch((error) => {
    //   // this.errors.push(error)
    //   // console.log(this.error)
    // })
    // .finally(() => {
    //   setTimeout(
    //     function () {
    //       // this.showProgress = false;
    //     },
    //     1000
    //   )
    // })
  }
}
