export interface IFacebookBaseSource {
    facebookId?: string;
}
export interface IFacebookSource extends IFacebookBaseSource {
    size: number;
}
export declare class FacebookSource {
    private props;
    constructor(props: IFacebookSource);
    isCompatible: () => boolean;
    get: (setState: any) => void;
}
