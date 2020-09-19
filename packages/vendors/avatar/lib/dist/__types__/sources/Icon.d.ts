export interface IIconSource {
    color?: string;
    colors?: string[];
}
export declare class IconSource {
    private props;
    private icon;
    constructor(props: IIconSource);
    isCompatible: () => boolean;
    get: (setState: any) => void;
}
