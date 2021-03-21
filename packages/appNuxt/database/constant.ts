export enum FBCollections {
  None = 'none',
  Users = 'users',
  Restaurants = 'restaurants',
  Events = 'events',
  PeopleInEvent = 'peopleinevents',
  Recipes = 'recipes',
  Photos = 'photos',
  Reviews = 'reviews'
}

export enum PhotoType {
  Restaurant = 'restaurant',
  Recipe = 'recipe',
  Waiter = 'waiter',
  User = 'user',
}

export const stringToPhotoType = (photoType: string) => {
  if (photoType === PhotoType.Restaurant) {
    return PhotoType.Restaurant
  }
  if (photoType === PhotoType.Recipe) {
    return PhotoType.Recipe
  }
  if (photoType === PhotoType.Waiter) {
    return PhotoType.Waiter
  }
  if (photoType === PhotoType.User) {
    return PhotoType.User
  }
}

export const getPhotoRelatedPath = (photoType: string): FBCollections => {
  switch (photoType) {
    case PhotoType.Restaurant: {
      return FBCollections.Restaurants
    }
    case PhotoType.Recipe: {
      return FBCollections.Recipes
    }
    case PhotoType.Waiter: {
      // return  FBCollections.Restaurants
      break
    }
    case PhotoType.User: {
      return FBCollections.Users
    }
  }

  return FBCollections.None
}

export enum ReviewType {
  Restaurant = 'restaurant',
  Event = 'event',
  Recipe = 'recipe',
}

export const getReviewRelatedPath = (reviewType: string): FBCollections => {
  switch (reviewType) {
    case ReviewType.Restaurant: {
      return FBCollections.Restaurants
    }
    case ReviewType.Event: {
      return FBCollections.Events
    }
    case ReviewType.Recipe: {
      return FBCollections.Recipes
    }
  }

  return FBCollections.None
}
