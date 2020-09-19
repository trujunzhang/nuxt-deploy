import { PaginationTerms } from '../paginationTerms'

describe('methods correctly in the PaginationTerms', () => {
  test('get topics dict', () => {
    const terms: IParseQueryBaseTerm = PaginationTerms.generateTermsForRecipesList({})

    const expectedTerm = {
      listId: 'ordered-recipes-list-view-for-u-e-r-c',
      limit: 10,
      allItems: false,
      pageIndex: 1,
      orderedUserId: undefined,
      eventId: undefined,
      restaurantId: undefined,
      creatorId: undefined,
      objectSchemaName: 'PARSE_RECIPES'
    }

    expect(terms).toEqual(expectedTerm)
  })
})
