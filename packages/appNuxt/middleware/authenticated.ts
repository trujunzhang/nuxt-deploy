import { Middleware } from '@nuxt/types'
import Cookies from 'universal-cookie'

export const LOGGED_NAMES: Array<String> = [
  // Restaurant(1)
  'biz_attribute___en', // edit restaurant
  // Review(1)
  'writeareview-biz-id___en', // write a review
  // Photo(1)
  'biz_user_photos-upload-id___en', // upload photo
  // User details(3)
  'user_details___en', // user details
  'user_photos-add___en', // upload user photo
  'messaging-inbox___en' // user's message inbox
  // '',
  // '',
  // ''
]

export const hasLoggedPages = (route) => {
  const { name } = route
  return LOGGED_NAMES.includes(name)
}

const myMiddleware: Middleware = ({ req, route, store, redirect }) => {
  // console.log('route.fullPath: ', JSON.stringify(route.fullPath)) // ok
  // console.log('route.Path: ', JSON.stringify(route)) // ok
  const isLoggedPages = hasLoggedPages(route)
  const cookies = req ? new Cookies(req.headers.cookie) : new Cookies()
  const credential = cookies.get('credential') || false
  // console.log('credential: ', credential) // ok
  const { fullPath } = route
  if (isLoggedPages && credential === false) { // not logged, go to login page.
    return redirect('/login', {
      return_url: fullPath
    })
  }
}

// const myMiddleware: Middleware = (context) => {
const myMiddlewarexxx: Middleware = ({ req, route, store, redirect }) => {
  // Use context
  // store.commit('add', response.data.results)
  // (store as any).SET_SHOW_404(false)
  // console.log('myMiddleware: ', process.browser) // ok
  // console.log('myMiddleware: ', JSON.stringify(store.state)) // ok
  // console.log('myMiddleware: ', JSON.stringify((store as any).getters['appConfigure/barColor'])) // error
  // console.log('myMiddleware: ', JSON.stringify((store as any).state.appConfigure.barColor)) // ok

  // Update client's store.
  // console.log('myMiddleware:(before) ', JSON.stringify(store.state.ieattaConfigure)) // ok
  // store.commit('ieattaConfigure/SET_SHOW_404', true)
  // console.log('myMiddleware:(after) ', JSON.stringify(store.state.ieattaConfigure)) // ok

  // import Cookies from 'universal-cookie'
  const cookies = req ? new Cookies(req.headers.cookie) : new Cookies()
  const credential = cookies.get('credential')

  // console.log('myMiddleware: ', JSON.stringify(credential))
  console.log('myMiddleware(credential): ', credential)
  console.log('myMiddleware: ', JSON.stringify(req.headers.cookie)) // ok
}

export default myMiddleware

// export default function ({ route, store, redirect }) {
//   // indexページへのアクセスは認証なしで許可する
// store.commit('add', response.data.results)
//   if (!(route.name === 'index')) {
//     const authenticated = store.getters['auth/getAuthenticated']
//     if (!authenticated) {
//       return redirect('/')
//     }
//   }
// }
