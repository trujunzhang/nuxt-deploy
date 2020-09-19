import * as Types from '@app/types'
import { AppLinks } from '@appUtils/index'

declare interface ITopRightButtonsGroupGenerateButtonSVGViewParams {
  buttonType: string
  modelType: string
  forObject: any
}

export class TopRightButtonsGroup {
  static generateButtonSVGView(
    params: ITopRightButtonsGroupGenerateButtonSVGViewParams
  ): ITopRightButtonItem {
    const { buttonType, modelType, forObject } = params
    switch (buttonType) {
      case Types.rightButtons.RIGHT_BUTTON_GROUP_ADD_REVIEW:
        return {
          title: 'Write a Review',
          svg:
            'M12 1.5l2.61 6.727 6.89.53-5.278 4.688 1.65 7.055L12 16.67 6.13 20.5l1.648-7.055L2.5 8.757l6.89-.53L12 1.5z',
          linkUrl: AppLinks.getNewReviewLink(modelType, forObject) || '/'
        }
      case Types.rightButtons.RIGHT_BUTTON_GROUP_ADD_EVENT:
        return {
          title: 'Add Event',
          svg:
            'M13.6 16H4.4C3.077 16 2 14.88 2 13.5v-9C2 3.12 3.077 2 4.4 2H5a1 1 0 0 1 2 0h4a1 1 0 0 1 2 0h.6C14.923 2 16 3.12 16 4.5v9c0 1.38-1.077 2.5-2.4 2.5zM15 7H3v6.5c0 .828.627 1.5 1.4 1.5h9.2c.773 0 1.4-.672 1.4-1.5V7zm-4.825 5.48l-.425.627L9 14.214l-.75-1.107-.425-.627A2.49 2.49 0 0 1 9 7.786a2.49 2.49 0 0 1 1.175 4.694zM9 9.214a1.07 1.07 0 1 0 0 2.142 1.07 1.07 0 0 0 0-2.142z',
          linkUrl: AppLinks.getNewEventLink(forObject) || '/'
        }
      case Types.rightButtons.RIGHT_BUTTON_GROUP_ADD_RECIPE:
        return {
          title: 'Add Recipe',
          svg:
            'M13.61 17h-.007a1.39 1.39 0 0 1-1.376-1.587L13 10l-2-1c0-5.373 1.375-8 3.25-8 .497 0 .75.336.75.75v13.86A1.39 1.39 0 0 1 13.61 17zM6.557 9.912l.35 5.59a1.41 1.41 0 1 1-2.813 0l.35-5.59A1.994 1.994 0 0 1 3 8V1.5a.5.5 0 0 1 1 0v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0V8c0 .91-.61 1.67-1.443 1.912z',
          linkUrl: AppLinks.getNewRecipeLink(modelType, forObject) || '/'
        }
      case Types.rightButtons.RIGHT_BUTTON_GROUP_MANAGER_ORDERED_USERS:
        return {
          title: 'Manager Users',
          svg:
            'M13.61 17h-.007a1.39 1.39 0 0 1-1.376-1.587L13 10l-2-1c0-5.373 1.375-8 3.25-8 .497 0 .75.336.75.75v13.86A1.39 1.39 0 0 1 13.61 17zM6.557 9.912l.35 5.59a1.41 1.41 0 1 1-2.813 0l.35-5.59A1.994 1.994 0 0 1 3 8V1.5a.5.5 0 0 1 1 0v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 1 1 0V8c0 .91-.61 1.67-1.443 1.912z',
          linkUrl: AppLinks.getEventsForUserLink(forObject) || '/'
        }
      default:
        throw new Error('No matched selected buttonType for top right buttonsGroup!')
    }
  }
}
