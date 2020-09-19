// Baks
// import DetailedRestaurant from './overlayrestaurant/DetailedRestaurant'
// import DetailedEvent from './overlayevent/DetailedEvent'
// import OrderedRecipes from './overlayorderedrecipe/OrderedRecipes'

// Applayout
import Layout from './Layout'
import { AppFooter } from './applayout/AppFooter'
// common
import Error404 from './common/Error404'
import SocialsButtonView from './common/social/SocialsButtonView'
import { FormattedRelative } from './common/react-intl/FormattedRelative'
import F8AppAlertSection from './common/F8AppAlertSection'
// Maps
import { F8RestaurantMapSection } from './leafletMaps/F8RestaurantMapSection'
import RestaurantsFixMapMarker from './leafletMaps/RestaurantsFixMapMarker'
import { RestaurantsListRightMap } from './leafletMaps/RestaurantsListRightMap'
import { EventsSingleHeaderRightMap } from './leafletMaps/EventsSingleHeaderRightMap'
// Lists
import OrderedUserList from './lists/OrderedUserList'
import RecipesList from './lists/RecipesList'
import OrderedRecipeUsersList from './lists/OrderedRecipeUsersList'
import { BaseRecipesListPage } from './lists/BaseRecipesListPage'
// extensions
import { F8StarIcon } from './extensions/F8StarIcon'
import { F8PaginationButtonNavigationBar } from './extensions/F8PaginationButtonNavigationBar'
import { F8UserAvatarSection } from './extensions/F8UserAvatarSection'
import { F8LoadingView } from './extensions/F8LoadingView'
import { F8EmptySection } from './extensions/F8EmptySection'
import { F8ImagesSlideShowView } from './extensions/F8ImagesSlideShowView'
import { F8CalenderView } from './extensions/F8CalenderView'
import { F8PlaceHolderImage } from './extensions/F8PlaceHolderImage'
import { F8SectionHeaderTitle } from './extensions/F8SectionHeaderTitle'
import { F8SinglePageTopHeader } from './extensions/F8SinglePageTopHeader'
import F8SinglePageHeaderTopLeftPanel from './extensions/F8SinglePageHeaderTopLeftPanel'
import F8SinglePageHeaderButtonsSection from './extensions/F8SinglePageHeaderButtonsSection'
// Right header photos
import { F8SingleHeaderRightPhotos } from './headerRightPhotos/F8SingleHeaderRightPhotos'
import { F8SingleHeaderRightPhotosWallModel } from './headerRightPhotos/F8SingleHeaderRightPhotosWallModel'
import { F8SingleHeaderRightPhotosScrollModel } from './headerRightPhotos/F8SingleHeaderRightPhotosScrollModel'
import F8SingleHeaderRightPhotoItem from './headerRightPhotos/F8SingleHeaderRightPhotoItem'
// Right header popup single photo
import PopoverPhotos from './photos/overlay/PopoverPhotos'
// header(app)
import HeaderContent from './applayout/appheader/HeaderContent'
import { HeaderContentSearchBar } from './applayout/appheader/HeaderContentSearchBar'
import { HeaderRightLoginPanel } from './applayout/appheader/HeaderRightLoginPanel'
import { HeaderRightUserIconsPanel } from './applayout/appheader/HeaderRightUserIconsPanel'
import { HeaderRightUserPanel } from './applayout/appheader/HeaderRightUserPanel'
import { HeaderRightUserPopOverlay } from './applayout/appheader/HeaderRightUserPopOverlay'
// header(login)
import { LoginHeaderContent } from './applayout/loginheader/LoginHeaderContent'
// overlay
import AppPopup from './overlay/AppPopup'
import UserLoginLayout from './login/UserLoginLayout'
import UserLoginAlert from './login/UserLoginAlert'
// Relation Page (Loading like 'restaurant')
import IEAPageWithReviewObject from './relationPage/IEAPageWithReviewObject'
import IEAPageWithPeopleInEventObject from './relationPage/IEAPageWithPeopleInEventObject'
import IEAPageWithRestaurantObject from './relationPage/IEAPageWithRestaurantObject'
import IEAPageWithPhotosList from './relationPage/IEAPageWithPhotosList'
import IEAPageWithStatistic from './relationPage/IEAPageWithStatistic'
import IEAPageWithEventObject from './relationPage/IEAPageWithEventObject'
import IEAPageWithUserObject from './relationPage/IEAPageWithUserObject'
import IEAPageWithRecipeObject from './relationPage/IEAPageWithRecipeObject'
import IEAPageWithModelTypeObject from './relationPage/IEAPageWithModelTypeObject'
// cells
import ReviewsItemForUserProfile from './cells/ReviewsItemForUserProfile'
import ReviewsItem from './cells/ReviewsItem'
import { EventsItem } from './cells/EventsItem'
import { OrderedUserItem } from './cells/OrderedUserItem'
import { OrderedRecipeUserItem } from './cells/OrderedRecipeUserItem'
import { RecipesItem } from './cells/RecipesItem'
import { RestaurantsItem } from './cells/RestaurantsItem'
// List
import EventsListForObject from './lists/EventsListForObject'
// edit Form
import IEAEditRestaurantLayout from './editForm/restaurant/IEAEditRestaurantLayout'
import OrganizationForNewRestaurant from './editForm/restaurant/OrganizationForNewRestaurant'
import { EditRestaurantForm } from './editForm/restaurant/EditRestaurantForm'
import OrganizationForNewEvent from './editForm/event/OrganizationForNewEvent'
import IEAEditEventLayout from './editForm/event/IEAEditEventLayout'
import { EditEventForm } from './editForm/event/EditEventForm'
import { EditRecipeForm } from './editForm/recipe/EditRecipeForm'
import OrganizationRecipe from './editForm/recipe/OrganizationRecipe'
import IEAEditRecipeLayout from './editForm/recipe/IEAEditRecipeLayout'
import IEAEditRecipeWithPhotosLayout from './editForm/recipe/IEAEditRecipeWithPhotosLayout'
import { EditReviewForm } from './editForm/review/EditReviewForm'
import { ReviewTopRating } from './editForm/review/ReviewTopRating'
import IEAEditReviewLayout from './editForm/review/IEAEditReviewLayout'
// Add Photo
import AddPhotoForModel from './editForm/photo/AddPhotoForModel'
import { IEAAddPhotosLayout } from './editForm/photo/IEAAddPhotosLayout'
import IEAAddPhotosForm from './editForm/photo/add/IEAAddPhotosForm'
import { IEAPhotosPreview } from './editForm/photo/add/IEAPhotosPreview'
import { IEADropFileForm } from './editForm/photo/add/IEADropFileForm'
import { IEAAddPhotosTop } from './editForm/photo/add/IEAAddPhotosTop'
// reviews
import ReviewsList from './reviews/page/ReviewsList'
import { ReviewsHeaderView } from './reviews/page/ReviewsHeaderView'
import { ReviewsHeaderSearchBar } from './reviews/page/ReviewsHeaderSearchBar'
import { ReviewsHeaderRightSortView } from './reviews/page/ReviewsHeaderRightSortView'
import { ReviewsItemButtonsPanel } from './reviews/page/ReviewsItemButtonsPanel'
import { EditReviewTopRestaurant } from './reviews/editTitle/EditReviewTopRestaurant'
import { EditReviewTopRecipe } from './reviews/editTitle/EditReviewTopRecipe'
import { EditReviewTopEvent } from './reviews/editTitle/EditReviewTopEvent'
// reviews edit
// reviews list
import IEAReviewsListLayout from './reviews/IEAReviewsListLayout'
// restaurant
import { IEARestaurantsHome } from './home/IEARestaurantsHome'
import IEARestaurantsList from './home/page/IEARestaurantsList'
import { RestaurantsLoadMore } from './home/page/RestaurantsLoadMore'
import { RestaurantsNoResults } from './home/page/RestaurantsNoResults'
// overlayRestaurant
import { IEARestaurantsLayout } from './overlayrestaurant/IEARestaurantsLayout'
import IEARecipesListForRestaurantLayout from './overlayrestaurant/IEARecipesListForRestaurantLayout'
// overlayRestaurant(page)
import { RestaurantsDetail } from './overlayrestaurant/page/RestaurantsDetail'
import RestaurantsSingleHeader from './overlayrestaurant/page/RestaurantsSingleHeader'
// overlayEvent
import { IEAEventsLayout } from './overlayevent/IEAEventsLayout'
import IEAOrderedUsersInEventsLayout from './overlayevent/IEAOrderedUsersInEventsLayout'
// overlayUser In Event
import { OrderedUserInEventHeaderView } from './overlayevent/orderedUsers/OrderedUserInEventHeaderView'
import { OrderedUserLeftMenusPanel } from './overlayevent/orderedUsers/OrderedUserLeftMenusPanel'
import OrderedUserRightRecipesListView from './overlayevent/orderedUsers/OrderedUserRightRecipesListView'
// overlayEvent(page)
import { EventsDetail } from './overlayevent/page/EventsDetail'
import { EventsSingleHeaderLeftPanel } from './overlayevent/page/EventsSingleHeaderLeftPanel'
import { EventsSingleHeader } from './overlayevent/page/EventsSingleHeader'
// overlayOrderedUser
import { IEAOrderedUsersLayout } from './overlayordereduser/IEAOrderedUsersLayout'
// overlayOrderedUser(page)
import { OrderedUsersDetail } from './overlayordereduser/page/OrderedUsersDetail'
import { OrderedUsersLeftPanel } from './overlayordereduser/page/OrderedUsersLeftPanel'
import { OrderedUsersSingleHeader } from './overlayordereduser/page/OrderedUsersSingleHeader'
// overlayOrderedRecipe
import { IEAOrderedRecipesLayout } from './overlayorderedrecipe/IEAOrderedRecipesLayout'
// overlayOrderedRecipe(page)
import { OrderedRecipesDetail } from './overlayorderedrecipe/page/OrderedRecipesDetail'
import { OrderedRecipesSingleHeader } from './overlayorderedrecipe/page/OrderedRecipesSingleHeader'
// profile
import { IEAUserProfileAboutLayout } from './profile/IEAUserProfileAboutLayout'
import IEALoggedUserInviteLayout from './profile/IEALoggedUserInviteLayout'
import UsersSingle from './profile/UsersSingle'
// profile(page)
import { UserProfileSingleHeader } from './profile/page/UserProfileSingleHeader'
import { UserProfileLeftMenusPanel } from './profile/page/UserProfileLeftMenusPanel'
import { UserProfileRecentActivityPanel } from './profile/page/UserProfileRecentActivityPanel'
import { UserProfileAboutRightPanel } from './profile/page/UserProfileAboutRightPanel'
import { EditUserForm } from './profile/edit/EditUserForm'
import { EditUserProfilePhoto } from './profile/edit/EditUserProfilePhoto'
// profile(menus)
import IEAUserProfilePhotosLayout from './profile/IEAUserProfilePhotosLayout'
import { IEAUserProfileEventsLayout } from './profile/IEAUserProfileEventsLayout'
import { IEAUserProfileRecipesLayout } from './profile/IEAUserProfileRecipesLayout'
import { IEAUserProfileReviewsLayout } from './profile/IEAUserProfileReviewsLayout'
// Logged user edit form
import IEAEditUserLayout from './profile/IEAEditUserLayout'
// app login
import UserLogOut from './login/UserLogOut'
import UserEmailSignIn from './login/UserEmailSignIn'
import UserEmailSignUp from './login/UserEmailSignUp'
import UserLoginMain from './login/UserLoginMain'
import UserLoginLeftPanel from './login/UserLoginLeftPanel'
import { UsersRemovedAccount } from './login/UsersRemovedAccount'
import { UsersResetPassword } from './login/UsersResetPassword'
import { UsersVerifyEmail } from './login/UsersVerifyEmail'
// Photos layout
import IEAPhotosSelectionLayout from './photos/IEAPhotosSelectionLayout'
import IEAPhotosBrowserLayout from './photos/IEAPhotosBrowserLayout'
import IEAPhotosSingleLayout from './photos/IEAPhotosSingleLayout'
// Photos Browser
import F8PhotosCollectionView from './photos/photosbrowser/F8PhotosCollectionView'
import F8PhotosCollectionItemView from './photos/photosbrowser/F8PhotosCollectionItemView'
import { F8PhotosTitleHeader } from './photos/photosbrowser/F8PhotosTitleHeader'
import { F8PhotosLoggedUserTitleHeader } from './photos/photosbrowser/F8PhotosLoggedUserTitleHeader'
import { F8OrganizationTitleHeader } from './photos/photosbrowser/F8OrganizationTitleHeader'
// Photos Select
import { F8PhotosSelectPage } from './photos/photosselect/F8PhotosSelectPage'
import { F8PhotosSelectLeftPanel } from './photos/photosselect/F8PhotosSelectLeftPanel'
import { F8PhotosSelectLeftPanelFooterView } from './photos/photosselect/F8PhotosSelectLeftPanelFooterView'
import F8PhotosSelectRightPanel from './photos/photosselect/F8PhotosSelectRightPanel'
import F8PhotosContentWithNavBar from './photos/photosselect/F8PhotosContentWithNavBar'
// Photos Single
import { F8PhotosSingleTop } from './photos/photossingle/F8PhotosSingleTop'
// leaflet
import { ExtendedMarker } from './react-leaflet-markercluster/ExtendedMarker'

import { TextFieldRow } from './extensions/TextFieldRow'

export {
  // Baks
  // DetailedRestaurant,
  // DetailedEvent,
  // OrderedRecipes,
  // Social
  SocialsButtonView,
  // common
  Layout,
  AppFooter,
  F8StarIcon,
  F8PaginationButtonNavigationBar,
  F8RestaurantMapSection,
  F8UserAvatarSection,
  F8LoadingView,
  F8EmptySection,
  F8ImagesSlideShowView,
  F8CalenderView,
  F8AppAlertSection,
  F8PlaceHolderImage,
  F8SectionHeaderTitle,
  F8SinglePageTopHeader,
  F8SinglePageHeaderTopLeftPanel,
  F8SinglePageHeaderButtonsSection,
  Error404,
  FormattedRelative,
  // List
  EventsListForObject,
  // Right header photos
  F8SingleHeaderRightPhotos,
  F8SingleHeaderRightPhotosWallModel,
  F8SingleHeaderRightPhotosScrollModel,
  F8SingleHeaderRightPhotoItem,
  // Right header popup single photo
  PopoverPhotos,
  // header(app)
  HeaderContent,
  HeaderContentSearchBar,
  HeaderRightLoginPanel,
  HeaderRightUserIconsPanel,
  HeaderRightUserPanel,
  HeaderRightUserPopOverlay,
  // header(login)
  LoginHeaderContent,
  // overlay
  AppPopup,
  UserLoginLayout,
  UserLoginAlert,
  // Relation
  IEAPageWithReviewObject,
  IEAPageWithModelTypeObject,
  IEAPageWithRecipeObject,
  IEAPageWithPhotosList,
  IEAPageWithStatistic,
  // reviews
  ReviewsList,
  ReviewsHeaderView,
  ReviewsHeaderSearchBar,
  ReviewsHeaderRightSortView,
  ReviewsItem,
  ReviewsItemForUserProfile,
  ReviewsItemButtonsPanel,
  EditReviewForm,
  ReviewTopRating,
  EditReviewTopRestaurant,
  EditReviewTopRecipe,
  EditReviewTopEvent,
  // reviews edit
  IEAEditReviewLayout,
  // reviews list
  IEAReviewsListLayout,
  // restaurant
  IEARestaurantsHome,
  RestaurantsItem,
  RestaurantsListRightMap,
  IEARestaurantsList,
  RestaurantsLoadMore,
  RestaurantsNoResults,
  // overlayRestaurant
  IEARestaurantsLayout,
  IEAEditRestaurantLayout,
  IEARecipesListForRestaurantLayout,
  // overlayRestaurant(page)
  RestaurantsDetail,
  EditRestaurantForm,
  EventsItem,
  RestaurantsSingleHeader,
  RestaurantsFixMapMarker,
  // overlayEvent
  IEAEventsLayout,
  IEAEditEventLayout,
  IEAOrderedUsersInEventsLayout,
  // overlayUser In Event
  OrderedUserInEventHeaderView,
  OrderedUserLeftMenusPanel,
  OrderedUserRightRecipesListView,
  // overlayEvent(page)
  EventsDetail,
  EditEventForm,
  EventsSingleHeaderLeftPanel,
  OrderedUserItem,
  OrderedUserList,
  EventsSingleHeader,
  EventsSingleHeaderRightMap,
  // overlayOrderedUser
  IEAOrderedUsersLayout,
  // overlayOrderedUser(page)
  OrderedUsersDetail,
  OrderedUsersLeftPanel,
  OrderedUsersSingleHeader,
  RecipesItem,
  RecipesList,
  BaseRecipesListPage,
  // overlayOrderedRecipe
  IEAOrderedRecipesLayout,
  // overlayOrderedRecipe(page)
  OrderedRecipesDetail,
  OrderedRecipeUsersList,
  OrderedRecipeUserItem,
  OrderedRecipesSingleHeader,
  EditRecipeForm,
  // organization
  OrganizationRecipe,
  IEAEditRecipeLayout,
  OrganizationForNewEvent,
  OrganizationForNewRestaurant,
  // organization(recipe)
  IEAEditRecipeWithPhotosLayout,
  // profile
  IEAUserProfileAboutLayout,
  IEALoggedUserInviteLayout,
  UsersSingle,
  // profile(page)
  UserProfileSingleHeader,
  UserProfileLeftMenusPanel,
  UserProfileRecentActivityPanel,
  UserProfileAboutRightPanel,
  EditUserForm,
  EditUserProfilePhoto,
  // profile(menus)
  IEAUserProfilePhotosLayout,
  IEAUserProfileEventsLayout,
  IEAUserProfileRecipesLayout,
  IEAUserProfileReviewsLayout,
  // Logged user edit form
  IEAEditUserLayout,
  // app login
  UserLogOut,
  UserEmailSignIn,
  UserEmailSignUp,
  UserLoginMain,
  UserLoginLeftPanel,
  UsersRemovedAccount,
  UsersResetPassword,
  UsersVerifyEmail,
  // Photos layout
  IEAPhotosSelectionLayout,
  IEAPhotosBrowserLayout,
  IEAPhotosSingleLayout,
  // Add Photo
  AddPhotoForModel,
  IEAAddPhotosLayout,
  IEAAddPhotosForm,
  IEAPhotosPreview,
  IEADropFileForm,
  IEAAddPhotosTop,
  // Photos Browser
  F8PhotosCollectionView,
  F8PhotosCollectionItemView,
  F8PhotosTitleHeader,
  F8PhotosLoggedUserTitleHeader,
  F8OrganizationTitleHeader,
  // Photos Select
  F8PhotosSelectPage,
  F8PhotosSelectLeftPanel,
  F8PhotosSelectLeftPanelFooterView,
  F8PhotosSelectRightPanel,
  F8PhotosContentWithNavBar,
  // Photos Single
  F8PhotosSingleTop,
  // leaflet
  ExtendedMarker,
  TextFieldRow
}

export default class Telescope {
  static components: any = {}

  private static VERSION = '0.27.5-nova'

  static registerComponent(name: string, component) {
    Telescope.components[name] = component
  }

  static getComponent(name: string) {
    return Telescope.components[name]
  }
}

// next.js
Telescope.registerComponent('Error404', Error404)

// Layout
Telescope.registerComponent('Layout', Layout)

// Baks
// Telescope.registerComponent('OrderedRecipes', OrderedRecipes)
// Telescope.registerComponent('DetailedRestaurant', DetailedRestaurant)
// Telescope.registerComponent('DetailedEvent', DetailedEvent)

Telescope.registerComponent('OrganizationForNewEvent', OrganizationForNewEvent)
Telescope.registerComponent('OrganizationForNewRestaurant', OrganizationForNewRestaurant)
Telescope.registerComponent('AddPhotoForModel', AddPhotoForModel)
Telescope.registerComponent('OrganizationRecipe', OrganizationRecipe)
Telescope.registerComponent('IEAPageWithRestaurantObject', IEAPageWithRestaurantObject)
Telescope.registerComponent('IEAPageWithEventObject', IEAPageWithEventObject)
Telescope.registerComponent('IEAPageWithUserObject', IEAPageWithUserObject)
Telescope.registerComponent('IEAPageWithRecipeObject', IEAPageWithRecipeObject)
Telescope.registerComponent('IEAPageWithModelTypeObject', IEAPageWithModelTypeObject)
Telescope.registerComponent('IEAPageWithReviewObject', IEAPageWithReviewObject)
Telescope.registerComponent('IEARestaurantsHome', IEARestaurantsHome)
Telescope.registerComponent('IEALoggedUserInviteLayout', IEALoggedUserInviteLayout)
Telescope.registerComponent('UserLoginMain', UserLoginMain)
Telescope.registerComponent('IEAPageWithPeopleInEventObject', IEAPageWithPeopleInEventObject)
Telescope.registerComponent('IEARestaurantsHome', IEARestaurantsHome)
Telescope.registerComponent('IEAReviewsListLayout', IEAReviewsListLayout)
Telescope.registerComponent('UsersSingle', UsersSingle)
