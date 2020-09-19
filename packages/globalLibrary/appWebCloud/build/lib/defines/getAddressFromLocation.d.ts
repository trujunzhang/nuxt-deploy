import { BaseDefine } from './baseDefine';
export declare class GetAddressFromLocationUtils {
    static parse_address(response: any): IGoogleAddressFetchResult;
}
export declare class GetAddressFromLocation extends BaseDefine {
    handler(request: any): Promise<any>;
}
