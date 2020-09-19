export declare function createRedirectSource(network: any, property: any): {
    new (props: any): {
        props: any;
        isCompatible: () => boolean;
        get: (setState: any) => void;
    };
};
