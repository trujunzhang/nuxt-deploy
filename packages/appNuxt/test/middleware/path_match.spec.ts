import { hasLoggedPages } from '~/middleware/authenticated'

describe('path', () => {
  test('contains special string', () => {
    // Restaurant(edit)
    expect(hasLoggedPages({
      name:
        'biz_attribute___en' // edit restaurant
    })).toBe(true)
    // Event(edit)
    expect(hasLoggedPages({
      name:
        'event_attribute___en' // edit restaurant
    })).toBe(true)
    // Recipe(edit)
    expect(hasLoggedPages({
      name:
        'recipe_attribute___en' // edit restaurant
    })).toBe(true)
    // Review(1)
    expect(hasLoggedPages({
      name:
        'writeareview-id___en' // write a review
    })).toBe(true)
    // Photo(1)
    expect(hasLoggedPages({
      name:
        'biz_user_photos-upload-id___en' // upload photo
    })).toBe(true)
    // User details(4)
    // expect(hasLoggedPages({
    //   name:
    //     'user_details___en' // [user_detail_left_menu]: default
    // })).toBe(true)
    // expect(hasLoggedPages({
    //   name:
    //     'user_details_restaurants_self___en' // [user_detail_left_menu]: restaurants
    // })).toBe(true)
    // expect(hasLoggedPages({
    //   name:
    //     'user_details_reviews_self___en' // [user_detail_left_menu]: reviews
    // })).toBe(true)
    // expect(hasLoggedPages({
    //   name:
    //     'user_details_photos_self___en' // [user_detail_left_menu]: photos
    // })).toBe(true)
    // User edit pages(3)
    expect(hasLoggedPages({
      name:
        'user_photos-add___en' // upload user photo
    })).toBe(true)
    expect(hasLoggedPages({
      name:
        'messaging-inbox___en' // user's message inbox
    })).toBe(true)
    expect(hasLoggedPages({
      name:
        'profile___en' // user's profile
    })).toBe(true)
  })
})
