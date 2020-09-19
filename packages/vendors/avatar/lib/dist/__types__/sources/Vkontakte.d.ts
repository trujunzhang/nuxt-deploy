export interface IVkontakteBaseSource {
    vkontakteId?: string;
}
export interface IVkontakteSource extends IVkontakteBaseSource {
    size: number;
}
export declare class VkontakteSource {
    private props;
    constructor(props: IVkontakteSource);
    isCompatible: () => boolean;
    getImageSize(): "photo_50" | "photo_100" | "photo_200" | "photo_max";
    get: (setState: any) => void;
}
