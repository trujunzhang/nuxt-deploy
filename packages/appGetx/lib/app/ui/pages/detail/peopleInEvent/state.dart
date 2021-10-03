import 'package:get/get.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/filter/filter_models.dart';

class DetailPeopleInEventState {
  FirebaseController firebaseController = Get.find();

  Rx<ParseModelPeopleInEvent?> _peopleInEvent =
      Rx<ParseModelPeopleInEvent?>(null);

  Rx<ParseModelRestaurants?> _restaurant = Rx<ParseModelRestaurants?>(null);
  Rx<ParseModelEvents?> _event = Rx<ParseModelEvents?>(null);
  Rx<ParseModelUsers?> _user = Rx<ParseModelUsers?>(null);
  Rx<Map<String, ParseModelRecipes>> recipesDict =
      Rx<Map<String, ParseModelRecipes>>({});

  ParseModelPeopleInEvent? get detailModel => _peopleInEvent.value;

  ParseModelRestaurants? get restaurant => _restaurant.value;

  ParseModelEvents? get event => _event.value;

  ParseModelUsers? get user => _user.value;

  listenChanged(String peopleInEventId) {
    firebaseController.onPeopleInEventsChanged((value) {
      _peopleInEvent.value = FilterModels.instance.getSinglePeopleInEvent(
          firebaseController.peopleInEventsList, peopleInEventId);
    });
    firebaseController.onRecipesChanged((value) {
      recipesDict.value = FilterModels.instance.getRecipesDict(
          firebaseController.recipesList, detailModel!.restaurantId);
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
    recipesDict.value = FilterModels.instance.getRecipesDict(
        firebaseController.recipesList, detailModel!.restaurantId);
  }
}
