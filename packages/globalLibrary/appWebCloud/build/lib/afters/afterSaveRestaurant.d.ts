/// <reference types="parse" />
import { BaseAfter } from './baseAfter';
export declare class AfterSaveRestaurant extends BaseAfter {
    handler(request: any): Promise<Parse.Object | undefined>;
}
