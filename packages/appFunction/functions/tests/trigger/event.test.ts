import * as trigger from '../../src/trigger'

/**
 * EventTrigger test
 */
 describe("EventTrigger test", () => {
    it("works if true is truthy", () => {
      expect(trigger.EventTrigger.getInstance().PATH_DELETED).toBe('/events/{eventId}')
    })
  
  })