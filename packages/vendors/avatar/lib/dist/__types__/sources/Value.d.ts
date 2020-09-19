export interface IValueSource {
    color?: string;
    colors?: string[];
    name?: string;
    value?: string | null;
    email?: string;
    maxInitials?: number;
    initials?: string | any;
}
export declare class ValueSource {
    private props;
    constructor(props: IValueSource);
    isCompatible: () => boolean;
    getInitials(): any;
    getValue(): any;
    getColor(): string;
    get: (setState: any) => any;
}
