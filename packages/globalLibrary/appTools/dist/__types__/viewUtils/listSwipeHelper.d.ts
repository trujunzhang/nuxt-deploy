export declare type IListSwipeHelperOnScrollEnableChanged = (enable: any) => any;
export interface IListSwipeHelperParams {
    onScrollEnableChanged?: IListSwipeHelperOnScrollEnableChanged;
}
export interface IEventDict<T> {
    [Key: string]: T;
}
export declare class ListSwipeHelper {
    private _rows;
    private openCellId;
    private currentScrollEnabled;
    private onScrollEnableChangedDict;
    constructor(params: IListSwipeHelperParams);
    addOnScrollEnableChangedListener(key: string, onScrollEnableChanged: IListSwipeHelperOnScrollEnableChanged): void;
    swipedIdIsOpenCellId(swipedCellIdentifier: any): boolean;
    onRowOpen(cellIdentifier: any): void;
    onRowCloseOrPressOrScroll(closeOnRowPress: boolean): void;
    get scrollEnabled(): boolean;
    get rows(): any;
    safeCloseOpenRow(): void;
    closeRow(id: any): void;
    setScrollEnabled(enable: any): void;
    pushRowIds(cellIdentifier: any, rowRef: any): void;
}
