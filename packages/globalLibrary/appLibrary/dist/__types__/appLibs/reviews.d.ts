export declare class Reviews {
    static config: {
        paginationCountPerPage: number;
        dateFormat: string;
        defaultSortTag: string;
    };
    static RATE_STAR_LABELS: string[];
    static getHtmlBody(review: any): {
        __html: any;
    };
    static toDateString(date: any): string;
    static getThumbnailUrlByReviewType(review: any): string;
    static getCurrentSortArray(reviewListPageType: string): IReviewSortItem[];
    static checkCanEditReview({ review, currentUser }: {
        review: any;
        currentUser: any;
    }): boolean;
    static canShowPage({ forObject, pageForm, review }: {
        forObject: any;
        pageForm: any;
        review: any;
    }): boolean;
}
