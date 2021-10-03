import 'package:get/get.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/filter/filter_dict.dart';
import 'package:ieatta/app/filter/filter_models.dart';
import 'package:ieatta/app/filter/filter_utils.dart';

class SelectRecipeState {
  FirebaseController firebaseController = Get.find();

  RxList<String> unorderedRecipeIds = RxList<String>([]);
  Rx<ParseModelPeopleInEvent?> _peopleInEvent =
      Rx<ParseModelPeopleInEvent?>(null);

  // Select events.
  RxList<String> selected = RxList<String>([]);
  Rx<bool> isSaving = Rx<bool>(false);

  RxList<ParseModelRecipes> recipesList = RxList<ParseModelRecipes>([]);

  RxMap<String, ParseModelRecipes> recipesDict =
      RxMap<String, ParseModelRecipes>({});

  String get restaurantId => _peopleInEvent.value!.restaurantId;

  ParseModelPeopleInEvent? get peopleInEvent => _peopleInEvent.value;

  fetchData(String peopleInEventId) {
    // Model
    _peopleInEvent.value = FilterModels.instance.getSinglePeopleInEvent(
        firebaseController.peopleInEventsList, peopleInEventId);
    // Direct
    recipesDict.value = FilterModels.instance
        .getRecipesDict(firebaseController.recipesList, restaurantId);
    // List
    unorderedRecipeIds.value = FilterUtils.instance.getUnorderedRecipeIds(
        List.from(recipesDict.keys), _peopleInEvent.value!);
  }

  listenChanged() {
    firebaseController.onRecipesChanged((value) {
      recipesDict.value = FilterModels.instance
          .getRecipesDict(firebaseController.recipesList, restaurantId);
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
