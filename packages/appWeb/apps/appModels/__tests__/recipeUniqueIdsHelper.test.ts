import { RecipeUniqueIdsHelper } from '../recipeUniqueIdsHelper'

describe('methods correctly in the RecipeUniqueIdsHelper', () => {
  it('get nextUniqueIdsAsString', () => {
    const peopleInEventRealmInstance: any = {
      recipeUniqueIds: '123;234;345'
    }

    const array: string[] = RecipeUniqueIdsHelper.getRecipeUniqueIdsArrayFromPeopleInEvent(
      peopleInEventRealmInstance
    )

    expect(array.length).toEqual(3)

    const uniqueIds: string[] = ['456', '567']

    const nextUniqueIdsAsString = RecipeUniqueIdsHelper.insertRecipesUniqueIdsToPeopleInEventRealmInstance(
      peopleInEventRealmInstance,
      uniqueIds
    )
    const expectedNextUniqueIdsAsString = '123;234;345;456;567'
    expect(nextUniqueIdsAsString).toEqual(expectedNextUniqueIdsAsString)
  })

  it('get nextUniqueIdsAsString if exist', () => {
    const peopleInEventRealmInstance: any = {
      recipeUniqueIds: '123;234;345'
    }
    const uniqueIds: string[] = ['345', '456']

    const nextUniqueIdsAsString = RecipeUniqueIdsHelper.insertRecipesUniqueIdsToPeopleInEventRealmInstance(
      peopleInEventRealmInstance,
      uniqueIds
    )
    const expectedNextUniqueIdsAsString = '123;234;345;456'
    expect(nextUniqueIdsAsString).toEqual(expectedNextUniqueIdsAsString)
  })

  it('get getRecipeUniqueIdsArrayFromPeopleInEvent if recipeUniqueIds is empty string', () => {
    const peopleInEventRealmInstance: any = {
      recipeUniqueIds: ''
    }

    const array: string[] = RecipeUniqueIdsHelper.getRecipeUniqueIdsArrayFromPeopleInEvent(
      peopleInEventRealmInstance
    )
    expect(array.length).toEqual(0)
  })
})
