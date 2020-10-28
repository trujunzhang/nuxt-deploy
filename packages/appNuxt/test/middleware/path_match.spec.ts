import { hasLoggedPages } from '~/middleware/authenticated'

describe('path', () => {
  test('contains special string', () => {
    // Restaurant(1)
    expect(hasLoggedPages({
      name:
        'biz_attribute___en' // edit restaurant
    })).toBe(true)
    // Review(1)
    expect(hasLoggedPages({
      name:
        'writeareview-biz-id___en' // write a review
    })).toBe(true)
    // Photo(1)
    expect(hasLoggedPages({
      name:
        'biz_user_photos-upload-id___en' // upload photo
    })).toBe(true)
    // User details(3)
    expect(hasLoggedPages({
      name:
        'user_details___en' // user details
    })).toBe(true)
    expect(hasLoggedPages({
      name:
        'user_photos-add___en' // upload user photo
    })).toBe(true)
    expect(hasLoggedPages({
      name:
        'messaging-inbox___en' // user's message inbox
    })).toBe(true)
  })
})
