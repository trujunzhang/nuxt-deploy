export interface ISrcSource {
    src?: string | null;
}
export declare class SrcSource {
    static propTypes: {};
    private props;
    constructor(props: ISrcSource);
    isCompatible: () => boolean;
    get: (setState: any) => void;
}
