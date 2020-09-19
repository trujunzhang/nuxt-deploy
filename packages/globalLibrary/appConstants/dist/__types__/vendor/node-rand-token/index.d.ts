export declare class RandToken {
    private static alphaUpper;
    private static alphaNumeric;
    private defaults;
    private options;
    private static defaultGenerator;
    private static defaultEpoch;
    private static defaultPrefixLength;
    static suid(length: any, epoch: any, prefixLength: any): string;
    constructor(options?: null);
    private static suidPrefix;
    validateTokenChars(tokenChars: any): void;
    private static base62;
    buildGenerator(options: any): any;
    generate(size: number, chars?: string | null): string;
}
