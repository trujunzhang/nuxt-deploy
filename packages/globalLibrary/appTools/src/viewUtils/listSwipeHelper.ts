// Swipe Helper.
// =================
export type IListSwipeHelperOnScrollEnableChanged = (enable: any) => any

export interface IListSwipeHelperParams {
  onScrollEnableChanged?: IListSwipeHelperOnScrollEnableChanged
}

export interface IEventDict<T> {
  [Key: string]: T
}

export class ListSwipeHelper {
  private _rows: any
  private openCellId: any
  private currentScrollEnabled: boolean
  private onScrollEnableChangedDict: IEventDict<IListSwipeHelperOnScrollEnableChanged> = {}

  constructor(params: IListSwipeHelperParams) {
    const { onScrollEnableChanged } = params
    this._rows = {}
    this.currentScrollEnabled = true
    this.openCellId = null
    if (!!onScrollEnableChanged) {
      this.onScrollEnableChangedDict['main'] = onScrollEnableChanged
    }
  }

  addOnScrollEnableChangedListener(
    key: string,
    onScrollEnableChanged: IListSwipeHelperOnScrollEnableChanged
  ) {
    this.onScrollEnableChangedDict[key] = onScrollEnableChanged
  }

  swipedIdIsOpenCellId(swipedCellIdentifier) {
    if (this.openCellId && this.openCellId !== swipedCellIdentifier) {
      return true
    }
    return false
  }

  onRowOpen(cellIdentifier) {
    if (this.openCellId && this.openCellId !== cellIdentifier) {
      this.safeCloseOpenRow()
    }
    this.openCellId = cellIdentifier
  }

  onRowCloseOrPressOrScroll(closeOnRowPress: boolean) {
    if (this.openCellId) {
      if (closeOnRowPress) {
        this.safeCloseOpenRow()
        this.openCellId = null
      }
    }
  }

  get scrollEnabled() {
    return this.currentScrollEnabled
  }

  get rows() {
    return this._rows
  }

  safeCloseOpenRow() {
    // if the openCellId is stale due to deleting a row this could be undefined
    if (this._rows[this.openCellId]._root) {
      this._rows[this.openCellId]._root.closeRow()
    }
  }

  closeRow(id) {
    if (this.openCellId) {
      this.safeCloseOpenRow()
      this.openCellId = null
    }
  }

  setScrollEnabled(enable) {
    this.currentScrollEnabled = enable
    const keys = Object.keys(this.onScrollEnableChangedDict)
    keys.map((key) => {
      this.onScrollEnableChangedDict[key](enable)
    })
  }

  pushRowIds(cellIdentifier, rowRef) {
    this._rows[cellIdentifier] = rowRef
  }
}
