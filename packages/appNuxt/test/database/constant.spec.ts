import { FBCollections } from '~/database/constant'

describe('FBCollections', () => {
  test('is correct enum values', () => {
    expect(FBCollections.Users).toBe('users')
    expect(FBCollections.Restaurants).toBe('restaurants')
    expect(FBCollections.Events).toBe('events')
    expect(FBCollections.Waiters).toBe('waiters')
    expect(FBCollections.PeopleInEvent).toBe('peopleinevents')
    expect(FBCollections.Recipes).toBe('recipes')
    expect(FBCollections.Photos).toBe('photos')
    expect(FBCollections.Reviews).toBe('reviews')
  })
})
