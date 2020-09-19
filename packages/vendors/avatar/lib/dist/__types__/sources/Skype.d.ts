export interface ISkypeSource {
    skypeId?: string;
}
export declare class SkypeSource {
    private props;
    constructor(props: ISkypeSource);
    isCompatible: () => boolean;
    get: (setState: any) => any;
}
