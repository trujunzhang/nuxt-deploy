import 'package:get/get.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/enum/fb_collections.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/filter/filter_models.dart';
import 'package:my_plugin/my_plugin.dart';

class EditRecipeState {
  FirebaseController firebaseController = Get.find();

  Rx<String> displayName = Rx<String>('');
  Rx<String> price = Rx<String>('');
  Rx<bool> isButtonDisabled = Rx<bool>(false);

  Rx<String> selectedCover = Rx<String>('');
  Rx<ParseModelRecipes?> _recipe = Rx<ParseModelRecipes?>(null);

  RxList<ParseModelPhotos> photosList = RxList<ParseModelPhotos>([]);

  ParseModelRecipes? get editModel => _recipe.value;

  listenChanged() {
    ever(selectedCover, (value) {
      Log.d('selectedCover new value: $value');
    });
  }

  initEditModel(String recipeId) {
    // Model
    _recipe.value = FilterModels.instance
        .getSingleRecipe(firebaseController.recipesList, recipeId);
    // Variables
    displayName.value = editModel!.displayName;
    price.value = editModel!.price;
    selectedCover.value = editModel!.originalUrl;
    // List
    photosList.value = FilterModels.instance.getPhotosList(
        firebaseController.photosList, recipeId, PhotoType.Recipe);
  }
}
