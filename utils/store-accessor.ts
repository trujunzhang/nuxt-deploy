import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import AppConfigure from '~/store/appConfigure'

/* eslint import/no-mutable-exports: 0 */
let appConfigure: AppConfigure

function initialiseStores (store: Store<any>): void {
  appConfigure = getModule(AppConfigure, store)
}

export { initialiseStores, appConfigure }
