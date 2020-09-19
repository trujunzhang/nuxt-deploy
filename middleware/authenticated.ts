import { Middleware } from '@nuxt/types'

// const myMiddleware: Middleware = (context) => {
const myMiddleware: Middleware = ({ route, store, redirect }) => {
  // Use context
}

export default myMiddleware

// export default function ({ route, store, redirect }) {
//   // indexページへのアクセスは認証なしで許可する
//   if (!(route.name === 'index')) {
//     const authenticated = store.getters['auth/getAuthenticated']
//     if (!authenticated) {
//       return redirect('/')
//     }
//   }
// }
