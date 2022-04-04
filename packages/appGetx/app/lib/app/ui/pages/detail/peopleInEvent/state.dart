import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

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
      _peopleInEvent.value = firebaseController.peopleInEventsList
          .singlePeopleInEvent(peopleInEventId);
      recipesInEvent.value =
          _recipesDict.value.getRecipesListForEvent(detailModel!.recipes!);
    });
    firebaseController.onRecipesChanged((value) {
      _recipesDict.value = firebaseController.recipesList
          .getRecipesDict(detailModel!.restaurantId!);
      recipesInEvent.value =
          _recipesDict.value.getRecipesListForEvent(detailModel!.recipes!);
    });
  }

  fetchData(String peopleInEventId) {
    // Model
    _peopleInEvent.value = firebaseController.peopleInEventsList
        .singlePeopleInEvent(peopleInEventId);
    _restaurant.value = firebaseController.restaurantsList
        .singleRestaurant(detailModel!.restaurantId);
    _event.value =
        firebaseController.eventsList.singleEvent(detailModel!.eventId!);
    _user.value = firebaseController.usersList.singleUser(detailModel!.userId!);
    // Direct
    _recipesDict.value = firebaseController.recipesList
        .getRecipesDict(detailModel!.restaurantId!);
    recipesInEvent.value =
        _recipesDict.value.getRecipesListForEvent(detailModel!.recipes!);
  }
}
