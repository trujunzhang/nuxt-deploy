import { BaseDefine } from './baseDefine';
export declare class InvokeCloudinary extends BaseDefine {
    static setupCloudinary(): void;
    handler(request: any): Promise<ICloudinaryCloudReturnResult>;
}
