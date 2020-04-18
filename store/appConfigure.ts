import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

export interface IAppConfigureState {
    barColor: string
    barImage: string
    drawer: any
}

@Module({ stateFactory: true, namespaced: true, name: 'appConfigure' })
export default class AppConfigure extends VuexModule implements IAppConfigureState {
  public barColor: string = 'rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)'
  public barImage: string = 'https://demos.creative-tim.com/material-dashboard/assets/img/sidebar-1.jpg'
  public drawer: any = null

  @Mutation
  SET_BAR_IMAGE (payload: any) {
    this.barImage = payload
  }

  @Mutation
  SET_DRAWER (payload: any) {
    this.drawer = payload
  }

  @Mutation
  SET_SCRIM (payload: any) {
    this.barColor = payload
  }
}
