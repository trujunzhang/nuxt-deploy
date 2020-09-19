declare interface IPeopleInEventHelperUpdatePeopleInEventParseInstanceParams {
  // Relation
  peopleInEventListDict: IPeopleInEventListDict
  event: IParseModelEvents
  // Current selection.
  selectedUserId: string
  hasOrdered: boolean
  orderedRecipeIds: string[] // ParseObject's objectId.
  selectedRecipe: IParseModelRecipes
}
