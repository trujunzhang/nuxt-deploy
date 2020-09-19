import { Md5Utils } from '../md5Utils'

describe('methods correctly in the utils', () => {
  test('should return string correctly invoked getMd5String', () => {
    const md5String = Md5Utils.getMd5String('topicName')

    const expectedMd5String = '2f131b4df8e3e21a112f3f0f0fc9aa34'
    expect(expectedMd5String).toEqual(md5String)
  })

  test('should return string correctly with toLowerCase invoked getMd5String', () => {
    const md5String = Md5Utils.getMd5String('topicName', true)

    const expectedMd5String = '57e1d4122d721e80b15a7526eae36ce2'
    expect(expectedMd5String).toEqual(md5String)
  })

  test('should return string correctly,  invoked random', () => {
    // const randomString = random(0, 16, [])

    const expectedMd5String = '57e1d4122d721e80b15a7526eae36ce2'
    // expect(expectedMd5String).toEqual(md5String)
  })

  test('should return string correctly,  invoked adjustURIForExpoUri', () => {
    // const expoUri = adjustURIForExpoUri(mockedExpoLocalFileUri)
    // expect(expoUri).toEqual(mockedExpectedExoFixedFileUri)
  })
})
