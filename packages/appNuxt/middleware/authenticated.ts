import { Middleware } from '@nuxt/types'
import Cookies from 'universal-cookie'

const myMiddleware: Middleware = ({ req, route, store, redirect }) => {
  // console.log('myMiddleware:(before) ', JSON.stringify(store.state.ieattaConfigure)) // ok

  // store.commit('ieattaConfigure/SET_SHOW_404', true)

  // console.log('myMiddleware:(after) ', JSON.stringify(store.state.ieattaConfigure)) // ok
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
