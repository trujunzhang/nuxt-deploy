export declare function fetchJson(url: string, successCb: (data: any) => any, errorCb: (status: any) => any): void;
export declare function fetchJSONP(url: string, successCb: (data: any) => any, errorCb: () => any): void;
export declare const defaultColors: string[];
export declare function getRandomColor(value: any, colors?: string[]): string;
export interface IParseSizeResult {
    value: number;
    str: string;
    unit: string;
}
export declare function parseSize(size: any): IParseSizeResult;
export declare function defaultInitials(name: string, { maxInitials }: any): string;
