import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/filter/filter_models.dart';

class DetailPeopleInEventState {
  FirebaseController firebaseController = Get.find();

  final Rx<ParseModelPeopleInEvent?> _peopleInEvent =
      Rx<ParseModelPeopleInEvent?>(null);

  final Rx<ParseModelRestaurants?> _restaurant =
      Rx<ParseModelRestaurants?>(null);
  final Rx<ParseModelEvents?> _event = Rx<ParseModelEvents?>(null);
  final Rx<ParseModelUsers?> _user = Rx<ParseModelUsers?>(null);
  final Rx<Map<String, ParseModelRecipes>> _recipesDict =
      Rx<Map<String, ParseModelRecipes>>({});
  RxList<ParseModelRecipes> recipesInEvent = RxList<ParseModelRecipes>([]);

  ParseModelPeopleInEvent? get detailModel => _peopleInEvent.value;

  ParseModelRestaurants? get restaurant => _restaurant.value;

  ParseModelEvents? get event => _event.value;

  ParseModelUsers? get user => _user.value;

  listenChanged(String peopleInEventId) {
    firebaseController.onPeopleInEventsChanged((value) {
      _peopleInEvent.value = FilterModels.instance.getSinglePeopleInEvent(
          firebaseController.peopleInEventsList, peopleInEventId);
      recipesInEvent.value = FilterModels.instance
          .getRecipesListForEvent(_recipesDict.value, detailModel!.recipes);
    });
    firebaseController.onRecipesChanged((value) {
      _recipesDict.value = FilterModels.instance.getRecipesDict(
          firebaseController.recipesList, detailModel!.restaurantId);
      recipesInEvent.value = FilterModels.instance
          .getRecipesListForEvent(_recipesDict.value, detailModel!.recipes);
    });
  }

  fetchData(String peopleInEventId) {
    // Model
    _peopleInEvent.value = FilterModels.instance.getSinglePeopleInEvent(
        firebaseController.peopleInEventsList, peopleInEventId);
    _restaurant.value = FilterModels.instance.getSingleRestaurant(
        firebaseController.restaurantsList, detailModel!.restaurantId);
    _event.value = FilterModels.instance
        .getSingleEvent(firebaseController.eventsList, detailModel!.eventId);
    _user.value = FilterModels.instance
        .getSingleUser(firebaseController.usersList, detailModel!.userId);
    // Direct
    _recipesDict.value = FilterModels.instance.getRecipesDict(
        firebaseController.recipesList, detailModel!.restaurantId);
    recipesInEvent.value = FilterModels.instance
        .getRecipesListForEvent(_recipesDict.value, detailModel!.recipes);
  }
}
