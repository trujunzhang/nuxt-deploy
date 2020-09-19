// =====================================
// Restaurants =========================
// =====================================
declare interface IRestaurantObjectForMapInfo extends IParseModelWithDisplayName {
  address: string
}

declare interface IRestaurantMapInfo {
  latitude: number
  longitude: number
  displayName: string
  address: string
  editLink: string
  showEditButton: boolean
  autoPopup: boolean
  onlyMap: boolean
}

// =====================================
// Reviews =============================
// =====================================
declare interface IReviewForObject extends IUniqueModel {
  // id: string
  modelType: string
  displayName: string
}

// =====================================
// Users ===============================
// =====================================
declare interface IUsersLeftMenu {
  pageForm: string
}
