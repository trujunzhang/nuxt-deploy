import * as trigger from '../../src/trigger'

/**
 * RestaurantTrigger test
 */
 describe("RestaurantTrigger test", () => {
    it("works if true is truthy", () => {
      expect(trigger.RestaurantTrigger.getInstance().PATH_CREATED).toBe('/restaurants/{restaurantId}')
      expect(trigger.RestaurantTrigger.getInstance().PATH_DELETED).toBe('/restaurants/{restaurantId}')
    })
  
  })