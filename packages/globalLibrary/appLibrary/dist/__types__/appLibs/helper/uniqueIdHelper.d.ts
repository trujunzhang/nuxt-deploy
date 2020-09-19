export declare class UniqueIdHelper {
    static getUUID(): any;
    /**
     * Get the object's uniqueId from it's parent.
     *
     * @param objectSchemaName
     * @param parentObject
     */
    static getUniqueIdFromParentModel(params: IUniqueIdHelperGetUniqueIdFromParentModelParams): any;
    static getUniqueIdForReview(params: IUniqueIdHelperGetUniqueIdForReviewParams): string;
    static getUniqueIdByPhotoType(parseModelPhoto: IParseModelPhotos | IRealmModelPhotos, photoType: string): string;
}
