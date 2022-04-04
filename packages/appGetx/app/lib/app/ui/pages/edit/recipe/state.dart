import 'package:app_models/app_models.dart';
import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';

class EditRecipeState {
  FirebaseController firebaseController = Get.find();

  Rx<String> displayName = Rx<String>('');
  Rx<String> price = Rx<String>('');
  Rx<bool> isButtonDisabled = Rx<bool>(false);

  Rx<String> selectedCover = Rx<String>('');
  final Rx<ParseModelRecipes?> _recipe = Rx<ParseModelRecipes?>(null);

  RxList<ParseModelPhotos> photosList = RxList<ParseModelPhotos>([]);

  ParseModelRecipes? get editModel => _recipe.value;

  listenChanged() {
    ever(selectedCover, (value) {
      // Log.d('selectedCover new value: $value');
    });
  }

  initEditModel(String recipeId) {
    // Model
    _recipe.value = firebaseController.recipesList.singleRecipe(recipeId);
    // Variables
    displayName.value = editModel!.displayName!;
    price.value = editModel!.price!;
    selectedCover.value = editModel!.originalUrl!;
    // List
    photosList.value = firebaseController.photosList
        .filterPhotosList(recipeId, PhotoType.Recipe);
  }
}
