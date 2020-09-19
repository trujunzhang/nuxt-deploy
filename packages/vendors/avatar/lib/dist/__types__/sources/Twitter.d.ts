export interface ITwitterBaseSource {
    twitterHandle?: string;
}
export interface ITwitterSource extends ITwitterBaseSource {
    size: number;
}
export declare class TwitterSource {
    static propTypes: {};
    private props;
    constructor(props: ITwitterSource);
    isCompatible: () => boolean;
    getImageSize(): "mini" | "normal" | "bigger" | "original";
    get: (setState: any) => void;
}
