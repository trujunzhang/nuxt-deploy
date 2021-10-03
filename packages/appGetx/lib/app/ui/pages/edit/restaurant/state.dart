import 'package:get/get.dart';
import 'package:ieatta/app/controller/firebase.controller.dart';
import 'package:ieatta/app/data/model/index.dart';
import 'package:ieatta/app/filter/filter_models.dart';
import 'package:my_plugin/my_plugin.dart';

class EditRestaurantState {
  FirebaseController firebaseController = Get.find();

  Rx<String> displayName = Rx<String>('');
  Rx<String> note = Rx<String>('');
  Rx<bool> isButtonDisabled = Rx<bool>(false);

  Rx<String> selectedCover = Rx<String>('');
  Rx<ParseModelRestaurants?> _restaurant = Rx<ParseModelRestaurants?>(null);

  RxList<ParseModelPhotos> photosList = RxList<ParseModelPhotos>([]);

  ParseModelRestaurants? get editModel => _restaurant.value;

  listenChanged() {
    ever(selectedCover, (value) {
      Log.d('selectedCover new value: $value');
    });
  }

  initEditModel(String restaurantId) {
    // Model
    _restaurant.value = FilterModels.instance
        .getSingleRestaurant(firebaseController.restaurantsList, restaurantId);
    // Variables
    displayName.value = editModel!.displayName;
    note.value = editModel!.extraNote;
    selectedCover.value = editModel!.originalUrl;
    // List
    photosList.value = FilterModels.instance
        .getPhotosInRestaurantList(firebaseController.photosList, restaurantId);
  }
}
