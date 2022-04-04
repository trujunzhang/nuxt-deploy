import * as trigger from '../../src/trigger'

/**
 * RecipeTrigger test
 */
 describe("RecipeTrigger test", () => {
    it("works if true is truthy", () => {
      expect(trigger.RecipeTrigger.getInstance().PATH_DELETED).toBe('/recipes/{recipeId}')
    })
  
  })