/// <reference types="parse" />
export declare class ParseApp {
    static getQueryInstance(modelType: string): any;
    static getInstanceWithoutData(modelType: string, forObjectId: string): null;
    static filterReviewForUser(params: IFilterReviewForUserParams): Parse.Query<Parse.Object>;
    static filterForReview(params: IFilterForReviewParams): Parse.Query<Parse.Object>;
    static reviewRateForObject(array: any): number;
}
