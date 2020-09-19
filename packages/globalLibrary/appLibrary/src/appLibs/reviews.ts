import { MomentUtils } from '@app/tools'
import { AppConstants } from '@app/types'
import { Photos } from './photos'

import { StatusConstants } from '@app/types'

import * as Types from '@app/types'

export class Reviews {
  static config = {
    paginationCountPerPage: 2,
    // 6/11/2017
    dateFormat: 'DD/MM/YYYY',
    defaultSortTag: StatusConstants.reviewDefaultSortTag
  }

  static RATE_STAR_LABELS = [
    'Select your rating.',
    'Eek! Methinks not.',
    "Meh. I've experienced better.",
    'A-OK.',
    "Yay! I'm a fan.",
    'Woohoo! As good as it gets!'
  ]

  static getHtmlBody(review) {
    let html = review.body
    if (html) {
      html = '<p>' + html.replace('\n' + '\n', '</p><p>') + '</p>'
    }
    const htmlBody = {
      __html: html
    }
    return htmlBody
  }

  static toDateString(date) {
    return MomentUtils.toDateString(date, Reviews.config.dateFormat)
  }

  static getThumbnailUrlByReviewType(review) {
    const { objectSchemaName } = AppConstants.realmObjects[review.reviewType]
    switch (objectSchemaName) {
      case Types.model.PARSE_RESTAURANTS:
        return Photos.getListThumbnailUrl(review.restaurant)
      case Types.model.PARSE_EVENTS:
        return Photos.getListThumbnailUrl(review.event.restaurant)
      case Types.model.PARSE_RECIPES:
        return Photos.getListThumbnailUrl(review.recipe)
      default:
        throw new Error('No matched selected reviewListPageType!')
    }
  }

  static getCurrentSortArray(reviewListPageType: string): IReviewSortItem[] {
    switch (reviewListPageType) {
      case Types.reviewListPage.REVIEW_LIST_TYPE_NORMAL:
        return [
          {
            title: 'Normal Sort',
            queryTag: Types.common.REVIEW_SORT_NORMAL
          },
          {
            title: 'Newest First',
            queryTag: Types.common.REVIEW_SORT_NEWEST
          },
          {
            title: 'Oldest First',
            queryTag: Types.common.REVIEW_SORT_OLDEST
          },
          {
            title: 'Highest Rated',
            queryTag: Types.common.REVIEW_SORT_HIGHEST
          },
          {
            title: 'Lowest Rated',
            queryTag: Types.common.REVIEW_SORT_LOWEST
          }
        ]
      case Types.reviewListPage.REVIEW_LIST_TYPE_USER_PROFILE_ABOUT:
        return [
          {
            title: 'Normal Sort',
            queryTag: Types.common.REVIEW_SORT_NORMAL
          },
          {
            title: 'Newest First',
            queryTag: Types.common.REVIEW_SORT_NEWEST
          },
          {
            title: 'Oldest First',
            queryTag: Types.common.REVIEW_SORT_OLDEST
          },
          {
            title: 'Highest Rated',
            queryTag: Types.common.REVIEW_SORT_HIGHEST
          },
          {
            title: 'Lowest Rated',
            queryTag: Types.common.REVIEW_SORT_LOWEST
          }
        ]
      default:
        throw new Error('No matched selected reviewListPageType!')
    }
  }

  static checkCanEditReview({ review, currentUser }) {
    const { creator } = review
    if (
      !!currentUser &&
      !!currentUser.uniqueId &&
      !!creator &&
      !!creator.uniqueId &&
      creator.uniqueId === currentUser.uniqueId
    ) {
      return true
    }
    return false
  }

  static canShowPage({ forObject, pageForm, review }) {
    switch (pageForm) {
      case Types.editModel.MODEL_FORM_TYPE_EDIT:
        if (!!forObject && !!review) {
          return true
        }
        break
      case Types.editModel.MODEL_FORM_TYPE_NEW:
        if (!!forObject) {
          return true
        }
        break
    }
    return false
  }
}
