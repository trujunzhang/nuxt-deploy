// https://github.com/adamwdraper/Numeral-js/tree/master/tests/formats

import { NumeralUtils } from '../../numeralUtils'

describe('methods correctly in the NumeralUtils', () => {
  afterAll(() => {
    NumeralUtils.reset()
  })

  test('should format to time', () => {
    const tests = [
      [0, '00:00:00', '0:00:00'],
      [null, '00:00:00', '0:00:00'],
      [25, '00:00:00', '0:00:25'],
      [238, '00:00:00', '0:03:58'],
      [63846, '00:00:00', '17:44:06']
    ]

    for (var i = 0; i < tests.length; i++) {
      expect(NumeralUtils.format(tests[i][0], tests[i][1])).toEqual(tests[i][2])
    }
  })

  test('should unformat to time', () => {
    const tests = [['0:00:00', 0], ['0:00:25', 25], ['0:03:58', 238], ['17:44:06', 63846]]

    for (var i = 0; i < tests.length; i++) {
      expect(NumeralUtils.newInstance(tests[i][0]).value()).toEqual(tests[i][1])
    }
  })
})
