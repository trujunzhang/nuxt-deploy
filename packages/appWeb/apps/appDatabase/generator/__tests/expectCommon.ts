import { Flags } from '@app/library' // from '@appLibs/index'

export function ckeckRealmCommon(realmModel: IRealmCommonModel) {
  expect(realmModel.objectId).toBeDefined()
  expect(realmModel.uniqueId).toBeDefined()
  expect(realmModel.createdAt).toBeDefined()
  expect(realmModel.updatedAt).toBeDefined()
  expect(realmModel.syncPostedAt).toBeDefined()
  expect(realmModel.createdAt).toBeDefined()
  expect(realmModel.flag).toEqual(Flags.normalState)
}

test('should renturn object correctly', () => { })
