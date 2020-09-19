export declare class StatisticsHelper {
    private static userStateForHeaderPanel;
    private static userStateForRightPanel;
    private static userStateForMobile;
    static getUserVotingStars(userStatistic: IUserStatisticResult): IUserRatingStarItem[];
    static getUserStateRowItems(userStatistic: IUserStatisticResult, userStatisticsRowType: string): IUserStateRowItem[];
    private static getUserStateRowTypes;
    private static getUserStateRowItem;
}
