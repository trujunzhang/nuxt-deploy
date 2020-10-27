import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

export interface IIeattaConfigureState {
    show404: boolean
}

@Module({ stateFactory: true, namespaced: true, name: 'ieattaConfigure' })
export default class IeattaConfigure extends VuexModule implements IIeattaConfigureState {
  public show404: boolean = false
  // public show404: boolean = true

  @Mutation
  SET_SHOW_404 (payload: boolean) {
    this.show404 = payload
    console.log('show404:', payload)
  }
}
