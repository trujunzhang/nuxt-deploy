export declare class Validation {
    static email(value: any): "Invalid email address" | null;
    static required(value: any): "Required" | null;
    static minLength(min: any): (value: any) => string | null;
    static maxLength(max: any): (value: any) => string | null;
    static integer(value: any): "Must be an integer" | null;
    static oneOf(enumeration: any): (value: any) => string | null;
    static match(field: any): (value: any, data: any) => "Do not match" | null;
    static createValidator(rules: any): (data?: {}) => {};
}
