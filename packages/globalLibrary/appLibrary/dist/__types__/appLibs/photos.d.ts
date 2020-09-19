export declare class Photos {
    static config: {
        paginationCountPerPage: number;
        selectedPhotoCreatedAtFormat: string;
        placeHolderSmallImage: {
            PAGE_MAIN_FORM: string;
            PAGE_MAIN_FORM_WITH_PHOTO_OVERLAY: string;
            PAGE_PHOTOS_BROWSER_FORM: string;
            PAGE_PHOTOS_BROWSER_FORM_WITH_PHOTO_OVERLAY: string;
            PARSE_RESTAURANTS: string;
            PARSE_USERS: string;
            PARSE_RECORDS: string;
            PARSE_EVENTS: string;
            PARSE_RECIPES: string;
            PARSE_PHOTOS: string;
            PARSE_REVIEWS: string;
            PARSE_PEOPLE_IN_EVENT: string;
        };
        placeHolderLargeImage: {
            PAGE_MAIN_FORM: string;
            PAGE_MAIN_FORM_WITH_PHOTO_OVERLAY: string;
            PAGE_PHOTOS_BROWSER_FORM: string;
            PAGE_PHOTOS_BROWSER_FORM_WITH_PHOTO_OVERLAY: string;
            PARSE_RESTAURANTS: string;
            PARSE_USERS: string;
            PARSE_RECORDS: string;
            PARSE_EVENTS: string;
            PARSE_RECIPES: string;
            PARSE_PHOTOS: string;
            PARSE_REVIEWS: string;
            PARSE_PEOPLE_IN_EVENT: string;
        };
        photoTypes: {
            SECTION_PHOTOS_BROWSER_FOR_RESTAURANT: string;
            SECTION_PHOTOS_BROWSER_FOR_EVENT: string;
            SECTION_PHOTOS_BROWSER_FOR_RECIPE: string;
            SECTION_PHOTOS_BROWSER_FOR_USER: string;
        };
    };
    static getPhotoThumbnailUrl(photo: IParseModelPhotos): string;
    static getOriginalUrl(photo: IParseModelPhotos): string;
    static getImageUrlInListPhotosDict(params: IPhotoGetImageUrlInListPhotosDictParams): any;
    static getListThumbnailUrl(item?: any): string;
    static isPhotoParseObjectOwnRecipe(recipeUniqueId: any, photoParseInstance: IParseObject): boolean;
    static isPhotoOwnRecipe(recipeUniqueId: string, photo: IParseModelPhotos): boolean;
    static getPhotoType(sectionType: any): any;
    static removePhotoFromList({ photosCache }: {
        photosCache: any;
    }, selectedPhoto: IParseModelPhotos): IParseModelPhotos[];
    static toSelectedPhotoCreatedAtString(createdAt: Date): string;
}
