export interface IGravatarBaseSource {
    email?: string;
    md5Email?: string;
}
export interface IGravatarSource extends IGravatarBaseSource {
    size: number;
}
export declare class GravatarSource {
    private props;
    constructor(props: IGravatarSource);
    isCompatible: () => boolean;
    get: (setState: any) => void;
}
