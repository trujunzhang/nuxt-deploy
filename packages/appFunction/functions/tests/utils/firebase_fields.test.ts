import { FirebaseFields } from '../../src/utils/firebase_fields'

/**
 * Firebase Fields test
 */
describe("FirebaseFields test", () => {
  it("works if true is truthy", () => {
    expect(FirebaseFields.RESTAURANT_ID).toBe('restaurantId')
    expect(FirebaseFields.EVENT_ID).toBe('eventId')
    expect(FirebaseFields.RECIPE_ID).toBe('recipeId')
    expect(FirebaseFields.CREATOR_ID).toBe('creatorId')
  })

})