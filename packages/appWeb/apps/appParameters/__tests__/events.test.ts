import { EventsParameters } from '../events'

describe('Name of the EventsParameters', () => {
  it('should return corrently', () => {
    const result = new EventsParameters({}).end()
    expect(result).toBeDefined()
  })
})
