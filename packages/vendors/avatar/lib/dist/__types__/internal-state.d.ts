export interface IInternalState {
}
export default class InternalState {
    private sourcePointer;
    private active;
    private fetch;
    constructor();
    isActive(state?: any): boolean;
}
