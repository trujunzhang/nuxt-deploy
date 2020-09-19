export interface IGoogleBaseSource {
    googleId?: string;
    cache?: any;
}
export interface IGoogleSource extends IGoogleBaseSource {
    size: number;
}
export declare class GoogleSource {
    private props;
    constructor(props: IGoogleSource);
    isCompatible: () => boolean;
    get: (setState: any) => void;
}
