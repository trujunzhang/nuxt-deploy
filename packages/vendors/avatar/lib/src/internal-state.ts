export interface IInternalState {
  // this.sourcePointer = 0;
  // this.active = true;
  // this.fetch = null;
}

export default class InternalState {
  private sourcePointer: number
  private active: boolean
  private fetch: null

  constructor() {
    this.sourcePointer = 0
    this.active = true
    this.fetch = null
  }

  isActive(state: any = {}) {
    // Internal state has been reset => we received new props
    if (state.internal !== this) {
      return false
    }

    if (!this.fetch) {
      return false
    }

    if (this.active !== true) {
      return false
    }

    return true
  }
}
