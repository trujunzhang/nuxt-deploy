export declare class NumeralUtils {
    static newInstance(value?: any): any;
    /**
     * Format a number by format.
     * @example
     * Giving format:
     *    var value = NumeralUtils.format('12345','0,0'); // => '12,2345'
     * @example
     * Using default format:
     *    var value = NumeralUtils.format('123',''); // => '123'
     */
    static format(value: any, inputString: any): any;
    static reset(): void;
}
