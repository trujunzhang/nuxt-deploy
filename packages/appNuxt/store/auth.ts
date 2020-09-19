import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'
import { IAuthUser } from '~/database/firebase_helper'

export interface IAuthState {
  user: IAuthUser | null
}

@Module({ stateFactory: true, namespaced: true, name: 'auth' })
export default class Auth extends VuexModule implements IAuthState {
  public user: IAuthUser | null = null

  @Mutation
  ON_AUTH_STATE_CHANGED_MUTATION (payload: any) {
    // this.barColor = payload
    debugger
  }

  @Mutation
  SET_AUTH_USER (payload: IAuthUser) {
    this.user = payload
  }
}
