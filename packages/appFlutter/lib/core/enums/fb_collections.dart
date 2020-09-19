enum FBCollections {
  Restaurants,
  Photos,
  Reviews,
  Users
}

fbCollectionToString(FBCollections path) {
  switch (path) {
    case FBCollections.Restaurants:
      return "restaurants";
    case FBCollections.Photos:
      return "photos";
    case FBCollections.Reviews:
      return "reviews";
    case FBCollections.Users:
      return "users";
    default:
      return "none";
  }
}
