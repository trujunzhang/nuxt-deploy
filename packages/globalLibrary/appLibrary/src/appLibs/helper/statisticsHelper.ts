import * as Types from '@app/types'

export class StatisticsHelper {
  private static userStateForHeaderPanel = [
    Types.userStatistics.STATUS_RECIPES,
    Types.userStatistics.STATUS_REVIEWS,
    Types.userStatistics.STATUS_PHOTOS
  ]
  private static userStateForRightPanel = [
    Types.userStatistics.STATUS_EVENTS,
    Types.userStatistics.STATUS_RECIPES,
    Types.userStatistics.STATUS_REVIEWS
  ]
  private static userStateForMobile = [
    Types.userStatistics.STATUS_RECIPES,
    Types.userStatistics.STATUS_REVIEWS,
    Types.userStatistics.STATUS_PHOTOS,
    Types.userStatistics.STATUS_EVENTS
  ]

  static getUserVotingStars(userStatistic: IUserStatisticResult): IUserRatingStarItem[] {
    const ratingRows = [
      { tag: 5, width: '95%', value: userStatistic.fiveStars },
      { tag: 4, width: '69%', value: userStatistic.fourStars },
      { tag: 3, width: '42%', value: userStatistic.threeStars },
      { tag: 2, width: '20%', value: userStatistic.twoStars },
      { tag: 1, width: '10%', value: userStatistic.oneStars }
    ]
    return ratingRows
  }

  static getUserStateRowItems(
    userStatistic: IUserStatisticResult,
    userStatisticsRowType: string
  ): IUserStateRowItem[] {
    const rowTypes = StatisticsHelper.getUserStateRowTypes(userStatisticsRowType)
    const userStateRows = rowTypes.map((rowType) => {
      return StatisticsHelper.getUserStateRowItem(userStatistic, rowType)
    })
    return userStateRows
  }

  private static getUserStateRowTypes(userStatisticsRowType: string): string[] {
    switch (userStatisticsRowType) {
      case Types.userStatisticsRows.STATUS_ROWS_HEADER: {
        return StatisticsHelper.userStateForHeaderPanel
      }
      case Types.userStatisticsRows.STATUS_ROWS_RIGHT: {
        return StatisticsHelper.userStateForRightPanel
      }
      case Types.userStatisticsRows.STATUS_ROWS_FOR_MOBILE: {
        return StatisticsHelper.userStateForMobile
      }
    }
    throw new Error('Not found User State RowItem!')
  }

  private static getUserStateRowItem(
    userStatistic: IUserStatisticResult,
    rowType: string
  ): IUserStateRowItem {
    switch (rowType) {
      case Types.userStatistics.STATUS_RECIPES: {
        return {
          tag: 'Recipes',
          svg:
            'M17.22 22a1.78 1.78 0 0 1-1.74-2.167l1.298-4.98L14 13l1.756-9.657A1.635 1.635 0 0 1 19 3.635V20.22A1.78 1.78 0 0 1 17.22 22zm-7.138-9.156l.697 7.168a1.79 1.79 0 1 1-3.56 0l.7-7.178A3.985 3.985 0 0 1 5 9V3a1 1 0 0 1 2 0v5.5c0 .28.22.5.5.5s.5-.22.5-.5V3a1 1 0 0 1 2 0v5.5c0 .28.22.5.5.5s.5-.22.5-.5V3a1 1 0 0 1 2 0v5.83c0 1.85-1.2 3.518-2.918 4.014z',
          value: userStatistic.recipes
        }
      }
      case Types.userStatistics.STATUS_REVIEWS: {
        return {
          tag: 'Reviews',
          svg:
            'M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6zm-5.88 10.428l-3.16-1.938-3.05 2.01.59-3.457L7 10.596l3.457-.505L11.96 6.5l1.582 3.59 3.458.506-2.5 2.447.62 3.385z',
          value: userStatistic.reviews
        }
      }

      case Types.userStatistics.STATUS_PHOTOS: {
        return {
          tag: 'Photos',
          svg:
            'M19 20H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h2.184A2.99 2.99 0 0 1 10 4h4a2.99 2.99 0 0 1 2.816 2H19a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3zM12.005 8.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z',
          value: userStatistic.photos
        }
      }
      case Types.userStatistics.STATUS_EVENTS: {
        return {
          tag: 'Events',
          svg:
            'M13.6 16H4.4C3.077 16 2 14.88 2 13.5v-9C2 3.12 3.077 2 4.4 2H5a1 1 0 0 1 2 0h4a1 1 0 0 1 2 0h.6C14.923 2 16 3.12 16 4.5v9c0 1.38-1.077 2.5-2.4 2.5zM15 7H3v6.5c0 .828.627 1.5 1.4 1.5h9.2c.773 0 1.4-.672 1.4-1.5V7zm-4.825 5.48l-.425.627L9 14.214l-.75-1.107-.425-.627A2.49 2.49 0 0 1 9 7.786a2.49 2.49 0 0 1 1.175 4.694zM9 9.214a1.07 1.07 0 1 0 0 2.142 1.07 1.07 0 0 0 0-2.142z',
          value: userStatistic.events
        }
      }
    }
    throw new Error('Not found User State RowItem!')
  }
}
