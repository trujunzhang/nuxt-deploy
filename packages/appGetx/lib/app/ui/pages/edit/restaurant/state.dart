import 'package:get/get.dart';
import 'package:getx_firebase/getx_firebase.dart';
import 'package:ieatta/app/filter/filter_models.dart';

class EditRestaurantState {
  FirebaseController firebaseController = Get.find();

  Rx<String> displayName = Rx<String>('');
  Rx<String> note = Rx<String>('');
  Rx<bool> isButtonDisabled = Rx<bool>(false);

  Rx<String> selectedCover = Rx<String>('');
  final Rx<ParseModelRestaurants?> _restaurant = Rx<ParseModelRestaurants?>(null);

  RxList<ParseModelPhotos> photosList = RxList<ParseModelPhotos>([]);

  ParseModelRestaurants? get editModel => _restaurant.value;

  listenChanged() {
    ever(selectedCover, (value) {
      // Log.d('selectedCover new value: $value');
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
