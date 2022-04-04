enum FBCollections {
  Restaurants,
  Events,
  PeopleInEvent,
  Photos,
  Recipes,
  Users,
  Reviews,
}

fbCollectionToString(FBCollections path) {
  switch (path) {
    case FBCollections.Restaurants:
      return "restaurants";
    case FBCollections.Events:
      return "events";
    case FBCollections.PeopleInEvent:
      return "peopleinevents";
    case FBCollections.Photos:
      return "photos";
    case FBCollections.Recipes:
      return "recipes";
    case FBCollections.Users:
      return "users";
    case FBCollections.Reviews:
      return "reviews";
    default:
      return "none";
  }
}
