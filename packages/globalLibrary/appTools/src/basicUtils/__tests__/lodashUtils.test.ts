import { LodashUtils as _ } from '../lodashUtils'

describe('methods correctly in the LodashUtils ', () => {
  test('should return correctly, find object in array of objects', () => {
    const songs = [
      {
        description: 'object1',
        id: 1
      },
      {
        description: 'object2',
        id: 2
      },
      {
        description: 'object3',
        id: 3
      },
      {
        description: 'object4',
        id: 4
      }
    ]
    const song = _.find(songs, { id: 3 })

    expect(song.id).toEqual(3)
    expect(song.description).toEqual('object3')
  })
})
