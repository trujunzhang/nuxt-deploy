import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AppConfigure from '~/store/appConfigure'
import Auth from '~/store/auth'

/* eslint import/no-mutable-exports: 0 */
let appConfigure: AppConfigure
let auth: Auth

function initialiseStores (store: Store<any>): void {
  appConfigure = getModule(AppConfigure, store)
  auth = getModule(Auth, store)
}

export { initialiseStores, appConfigure, auth }
