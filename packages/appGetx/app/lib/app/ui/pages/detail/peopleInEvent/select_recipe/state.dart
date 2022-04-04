import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

class SelectRecipeState {
  FirebaseController firebaseController = Get.find();

  RxList<String> unorderedRecipeIds = RxList<String>([]);
  final Rx<ParseModelPeopleInEvent?> _peopleInEvent =
      Rx<ParseModelPeopleInEvent?>(null);

  // Select events.
  RxList<String> selected = RxList<String>([]);
  Rx<bool> isSaving = Rx<bool>(false);

  RxList<ParseModelRecipes> recipesList = RxList<ParseModelRecipes>([]);

  RxMap<String, ParseModelRecipes> recipesDict =
      RxMap<String, ParseModelRecipes>({});

  String get restaurantId => _peopleInEvent.value!.restaurantId!;

  ParseModelPeopleInEvent? get peopleInEvent => _peopleInEvent.value;

  fetchData(String peopleInEventId) {
    // Model
    _peopleInEvent.value = firebaseController.peopleInEventsList
        .singlePeopleInEvent(peopleInEventId);
    // Direct
    recipesDict.value =
        firebaseController.recipesList.getRecipesDict(restaurantId);
    // List
    unorderedRecipeIds.value = FilterUtils.instance.getUnorderedRecipeIds(
        List.from(recipesDict.keys), _peopleInEvent.value!);
  }

  listenChanged() {
    firebaseController.onRecipesChanged((value) {
      recipesDict.value =
          firebaseController.recipesList.getRecipesDict(restaurantId);
      List<String> newUnorderedRecipeIds = FilterUtils.instance
          .getUnorderedRecipeIds(
              List.from(recipesDict.keys), _peopleInEvent.value!);
      unorderedRecipeIds.value = FilterDict.instance
          .updateNewId(newUnorderedRecipeIds, unorderedRecipeIds);
    });
  }

  void pushId(String id) {
    selected.add(id);
  }

  bool contains(String id) {
    return selected.contains(id);
  }
}
